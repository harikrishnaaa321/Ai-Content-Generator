"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

function Billing() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      // Script loaded successfully
    };
    script.onerror = () => {
      console.error("Failed to load Razorpay script");
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const CreateSubscription = async () => {
    setLoading(true);
    try {
      const resp = await axios.post("/api/create-subscription", {});
      OnPayment(resp.data.id);
    } catch (error) {
      console.error("Error creating subscription:", error);
    } finally {
      setLoading(false);
    }
  };

  const OnPayment = (subId) => {
    if (!window.Razorpay) {
      console.error("Razorpay is not loaded");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "AI Content Generator",
      description: "Monthly subscription",
      handler: async (resp) => {
        console.log(resp);
        if (resp) {
          SaveSubscription(resp.razorpay_payment_id);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    // Instantiate Razorpay
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const SaveSubscription = async (paymentId) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format("DD/MM/YY"),
    });
    console.log(result);
    setUserSubscription({ ...userSubscription, active: true }); // Update the context with the new subscription status
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Billing</h1>
      <div className="flex justify-between">
        {/* Current Plan */}
        <div
          className={`flex-1 border rounded-lg p-6 mr-4 shadow-md ${
            userSubscription ? "bg-gray-300 border-gray-500 cursor-not-allowed" : "bg-gray-100 border-gray-300"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Current Plan</h2>
          <p className="text-lg mb-4">10,000 Words/Month</p>
          <p className="text-gray-600 mb-6">
            Enjoy our basic plan with 10,000 words every month at no cost!
          </p>
          <button
            disabled={userSubscription}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Manage Plan
          </button>
        </div>

        {/* Upgrade Plan */}
        <div
          className={`flex-1 border rounded-lg p-6 shadow-md ${
            userSubscription ? "bg-blue-300 border-blue-500" : "bg-blue-100 border-blue-300"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Upgrade Plan</h2>
          <p className="text-lg mb-4">1,000,000 Words/Month</p>
          <p className="text-gray-600 mb-6">
            Upgrade to our premium plan for $99 per month and enjoy 1,000,000 words each month!
          </p>
          <button
            disabled={loading || userSubscription}
            onClick={CreateSubscription}
            className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center gap-2 ${
              loading ? "opacity-70" : ""
            }`}
          >
            {loading ? (
              <>
                <Loader2Icon className="animate-spin w-5 h-5" />
                <span className="ml-2">Processing...</span>
              </>
            ) : (
              <span>{userSubscription ? "Active plan" : "Get started"}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billing;
