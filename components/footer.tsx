"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [githubSrc, setGithubSrc] = useState("");

  useEffect(() => {
    if (!resolvedTheme) return;

    setGithubSrc(`/social/github-${resolvedTheme}.svg`);
  }, [resolvedTheme]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 pb-14 md:flex-row md:justify-between">
      <p className="font-bold">
        Copyright ©{new Date().getFullYear()} Aissa Bedr
      </p>
      <div className="flex items-center gap-4">
        {githubSrc ? (
          <a href="https://github.com/aissa-dev1" target="_blank">
            <Card className="size-8 flex items-center justify-center rounded-md">
              <Image src={githubSrc} alt="github" width={20} height={20} />
            </Card>
          </a>
        ) : null}
      </div>
    </div>
  );
}
