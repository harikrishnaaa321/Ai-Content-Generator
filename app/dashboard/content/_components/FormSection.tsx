"use client"
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
interface PROPS {
  selectedTemplate: TEMPLATE | undefined; 
  userformInput:any,// Correctly define the type
  loading:boolean
}

function FormSection({ selectedTemplate,userformInput,loading}: PROPS) {
const [formData,setFormData] = useState<any>()
  const handleInputChange=(event:any)=>{
    const {name,value} = event.target;
    setFormData({...formData,[name]:value})
  }
  const onSubmit=(e:any)=>{
    e.preventDefault()
    userformInput(formData)
console.log(formData);

  }
  // Handle case where selected`Template might be undefined
  {
    console.log(selectedTemplate);
  }
  if (!selectedTemplate) {
    return <div>No template selected</div>;
  }

  return (
    <div className="p-5 shadow-lg border rounded-lg bg-white">
      <Image
        src={selectedTemplate?.icon}
        alt="icon"
        width={70}
        height={70}
      ></Image>
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>
      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div className="my-2 flex flex-co gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input name={item.name} required={item?.required} onChange={handleInputChange}/>
            ) : item.field == "textarea" ? (
              <Textarea name={item.name} required={item?.required} onChange={handleInputChange}/>
            ) : null}
          </div>
        ))}
        <Button type="submit"className="w-full py-6" disabled={loading}>{loading&&<Loader2Icon className="animate-spin"/>}Generate Content</Button>
      </form>
    </div>
  );
}

export default FormSection;
