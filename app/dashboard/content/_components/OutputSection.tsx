import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  aiOutput: string; // aiOutput should be a string
}

const OutputSection = ({ aiOutput }: Props) => {
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      if (typeof aiOutput === 'string') {
        editorInstance.setMarkdown(aiOutput);
      }
    }
  }, [aiOutput]);

  const handleCopy = () => {
    if (typeof window !== "undefined" && navigator && navigator.clipboard) {
      navigator.clipboard.writeText(aiOutput);
    } else {
      alert("Clipboard access is not available.");
    }
  };

  return (
    <div className="bg-white shadow-lg border">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your result</h2>
        <Button className="flex gap-2" onClick={handleCopy}>
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="your result will appear here"
        initialEditType="wysiwyg"
        previewStyle="vertical"
        height="420px"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current?.getInstance().getMarkdown())
        }
      />
    </div>
  );
};

export default OutputSection;
