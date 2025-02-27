"use client";

import { useClipboard } from "@/hooks/use-clipboard";
import { Card, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import ClipboardIcon from "../../../components/icons/clipboard";

export default function AboutEmailCard() {
  const { copyText } = useClipboard();

  return (
    <Card className="card card--gradient2 card__spacing card__spacing--centered">
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
