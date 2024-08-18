"use client";

import Image from "next/image";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ExperienceCard2023() {
  const { resolvedTheme } = useTheme();
  const [nextjsSrc, setNextjsSrc] = useState("");

  useEffect(() => {
    if (!resolvedTheme) return;

    setNextjsSrc(`/skills/nextjs-${resolvedTheme}.svg`);
  }, [resolvedTheme]);

  return (
    <Card className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center">
      <CardTitle className="text-2xl shrink-0">2023</CardTitle>
      <div className="flex flex-col gap-1">
        <CardDescription>As the previous year.</CardDescription>
        <CardDescription className="flex items-center gap-1">
          Continue in Front End Web Development{" "}
          <Image
            src="/skills/reactjs.svg"
            alt="reactjs"
            width={25}
            height={25}
          />
          <Image
            src="/skills/tailwindcss.svg"
            alt="tailwindcss"
            width={25}
            height={25}
          />
        </CardDescription>
        <CardDescription>
          In the begining of the year I learned the basics about Back End Web
          Development.
        </CardDescription>
        <CardDescription>
          After that I hate anything related to the Back End because it was hard
          for me.
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          Creating personal projects in the Front End area{" "}
          {nextjsSrc ? (
            <Image src={nextjsSrc} alt="nextjs" width={25} height={25} />
          ) : null}
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          In the end of the year I comeback to Back End and I tried to get
          through, it was not easy but I did a great job{" "}
          <Image src="/skills/nodejs.svg" alt="nodejs" width={25} height={25} />
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          Loved technology{" "}
          <Image src="/skills/solid.svg" alt="solid" width={25} height={25} />
        </CardDescription>
      </div>
    </Card>
  );
}
