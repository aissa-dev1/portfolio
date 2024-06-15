"use client";

import { useClipboard } from "@/hooks/use-clipboard";
import { Card, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import ClipboardIcon from "../icons/clipboard";

export default function MyEmailCard() {
  const { copyText } = useClipboard();

  return (
    <Card className="flex flex-col items-center justify-center lg:items-start gap-4 p-6 bg-gradient-to-r from-purple-700/15 to-blue-700/5">
      <CardTitle className="text-center lg:text-start">
        Do you want to start a project together?
      </CardTitle>
      <Button
        className="flex items-center gap-1 w-fit"
        onClick={() => {
          copyText(process.env.NEXT_PUBLIC_EMAIL as string);
        }}
      >
        <ClipboardIcon className="size-4" />
        <p>Copy my email address</p>
      </Button>
    </Card>
  );
}
