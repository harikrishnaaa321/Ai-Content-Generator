"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { Button } from "@/components/ui/button";
import { Loader2Icon, Copy } from "lucide-react";

export interface HISTORYPAGE{
  id: number;
  formData: string;
  aiResponse: string | null; // Allow aiResponse to be null
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;
}
const HistoryPage: React.FC = () => {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Fetch history data from the database
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const result = await db
          .select({
            id: AIOutput.id,
            templateSlug: AIOutput.templateSlug,
            createdBy: AIOutput.createdBy,
            aiResponse: AIOutput.aiResponse,
          })
          .from(AIOutput)
          .orderBy(AIOutput.createdAt) // Ensure data is ordered by date
          .execute();
        setHistory(result);
      } catch (error) {
        console.error("Failed to fetch history data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000); // Change back to "Copy" after 2 seconds
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2Icon className="animate-spin w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">History</h1>
      {history.length === 0 ? (
        <p>No history available</p>
      ) : (
        <div className="overflow-x-auto">
          <div className="max-h-[500px] overflow-y-auto border border-gray-300">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Template</th>
                  <th className="py-2 px-4 border-b">Created By</th>
                  <th className="py-2 px-4 border-b">AI Response</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {history.map((entry) => (
                  <tr key={entry.id} className="hover:bg-gray-50 transition-colors duration-300">
                    <td className="py-2 px-4 border-b">{entry.id}</td>
                    <td className="py-2 px-4 border-b">{entry.templateSlug}</td>
                    <td className="py-2 px-4 border-b">{entry.createdBy}</td>
                    <td className="py-2 px-4 border-b">{entry.aiResponse}</td>
                    <td className="py-2 px-4 border-b">
                      <Button
                        onClick={() => copyToClipboard(entry.aiResponse, entry.id)}
                        className="flex items-center gap-2"
                      >
                        <Copy className="w-4 h-4" />
                        {copiedId === entry.id ? "Copied" : "Copy"}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
