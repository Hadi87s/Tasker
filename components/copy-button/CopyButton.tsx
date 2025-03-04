"use client"; // This must be a client component

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(title);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button onClick={handleCopy} className="px-4 py-2 text-white">
      {copied ? <Check /> : <Copy />}
    </button>
  );
}
