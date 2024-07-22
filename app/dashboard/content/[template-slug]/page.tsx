import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug === props.params["template-slug"]
  );
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const [aiOutput, setAiOutput] = useState<string>("");
  const router = useRouter();
  const { totalUsage } = useContext(TotalUsageContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);
  const { userSubscription } = useContext(UserSubscriptionContext);

  const GenerativeAIContent = async (formData: any) => {
    if (totalUsage >= 10000 && !userSubscription) {
      alert("Please upgrade your plan to continue.");
      router.push("/dashboard/billing");
      return;
    }

    setLoading(true);

    try {
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
      const result = await chatSession.sendMessage(FinalAIPrompt);

      setAiOutput(result?.response.text() || "No response");
      await SaveInDb(
        JSON.stringify(formData), // Ensure formData is stringified
        selectedTemplate?.slug,
        result?.response.text() || "No response"
      );

      if (typeof setUpdateCreditUsage === "function") {
        setUpdateCreditUsage(Date.now());
      } else {
        console.error("setUpdateCreditUsage is not a function or is undefined");
      }
    } catch (error) {
      console.error("Error generating AI content:", error);
      alert("An error occurred while generating content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-3 gap-5 py-5">
        <div className="col-span-1">
          <FormSection
            selectedTemplate={selectedTemplate}
            userformInput={GenerativeAIContent}
            loading={loading}
          />
        </div>
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
