"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import { useTheme } from "next-themes";

export default function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center gap-4 pb-14 md:flex-row md:justify-between">
      <p className="font-bold">
        Copyright ©{new Date().getFullYear()} Aissa Bedr
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/aissa-dev1" target="_blank">
          <Card className="size-8 flex items-center justify-center rounded-md">
            <Image
              src={`/social/github-${resolvedTheme}.svg`}
              alt="github"
              width={20}
              height={20}
            />
          </Card>
        </a>
      </div>
    </div>
  );
}
