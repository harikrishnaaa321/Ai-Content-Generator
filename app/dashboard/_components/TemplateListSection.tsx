import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import Templates from "@/app/(data)/Templates";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

interface TemplateListSectionProps {
  userSearchInput: string;
}

const TemplateListSection = ({ userSearchInput }: TemplateListSectionProps) => {
  const [templateList, setTemplateList] = useState<TEMPLATE[]>(Templates);

  useEffect(() => {
    const searchInput = userSearchInput || ""; // Default to an empty string if undefined

    if (searchInput) {
      const filterData = Templates.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {templateList.map((item, index) => (
        <TemplateCard key={index} {...item} />
      ))}
    </div>
  );
};

export default TemplateListSection;
