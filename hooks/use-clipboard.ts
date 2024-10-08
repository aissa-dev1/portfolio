"use client";

import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export function useClipboard() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  async function copyText(textToCopy: string) {
    if (copied) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      toast({
        description: "Text copied to clipboard.",
      });
      const copyTimeout = setTimeout(() => {
        setCopied(false);
        clearTimeout(copyTimeout);
      }, 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  return { copyText, copied };
}
