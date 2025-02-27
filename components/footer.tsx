"use client";

import { Card } from "./ui/card";
import DynamicImage from "./dynamic-image";

export default function Footer() {
  return (
    <footer className="flex__col flex__center gap-4 h-footer pb-12 md:flex-row md:justify-between">
      <p className="font-bold">
        Copyright ©{new Date().getFullYear()} Aissa Bedr
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/aissa-dev1" target="_blank">
          <Card className="size-8 flex__center rounded-md">
            <DynamicImage
              src="/social/github.svg"
              alt="github"
              width={20}
              height={20}
            />
          </Card>
        </a>
      </div>
    </footer>
  );
}
