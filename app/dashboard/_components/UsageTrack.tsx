"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/db";
import { AIOutput, UserSubscription } from "@/utils/schema";
import { HISTORYPAGE } from "../history/page";
import { eq } from "drizzle-orm";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);
  const [maxWords, setMaxWords] = useState(10000);

  useEffect(() => {
    if (user) {
      GetData();
      IsUserSubscribe();
    }
  }, [user]);

  useEffect(() => {
    if (updateCreditUsage && user) {
      GetData();
    }
  }, [updateCreditUsage, user]);

  const GetData = async () => {
    const result: HISTORYPAGE[] = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
    GetTotalUsage(result);
  };

  const IsUserSubscribe = async () => {
    const result = await db
      .select()
      .from(UserSubscription)
      .where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress));
    if (result.length > 0) {
      setUserSubscription(true);
      setMaxWords(1000000);
    } else {
      setUserSubscription(false);
      setMaxWords(10000);
    }
  };

  const GetTotalUsage = (result: HISTORYPAGE[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total += Number(element.aiResponse?.length);
    });
    setTotalUsage(total);
    console.log(total);
  };
  return (
    <div className="m-5">
      <div className="bg-primary text-white p-3 rounded-lg ">
        credits
        <div className="h-2 bg-[#7a70a1] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: (totalUsage/maxWords)*100 }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/{maxWords} used</h2>
      </div><a href="/dashboard/billing">
      <Button className="w-full mt-3 text-primary" variant={"secondary"}>
        Upgrade
      </Button></a>
    </div>
  );
}

export default UsageTrack;
