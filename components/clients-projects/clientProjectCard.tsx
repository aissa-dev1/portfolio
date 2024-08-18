"use client";

import Image from "next/image";
import { Card, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type ClientProjectTypeSkill = {
  icon: string;
  dynamicIcon: boolean;
};

export type ClientProjectType = {
  id: string;
  img: string;
  title: string;
  type: "front" | "back" | "full" | "game";
  skills: ClientProjectTypeSkill[];
  liveSite: string;
};

interface Props extends ClientProjectType {}

function ClientProjectCardSkill({ icon, dynamicIcon }: ClientProjectTypeSkill) {
  const { resolvedTheme } = useTheme();
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (!resolvedTheme) return;
    if (!dynamicIcon) {
      setSrc(`/skills/${icon}.svg`);
      return;
    }

    setSrc(`/skills/${icon}-${resolvedTheme}.svg`);
  }, [resolvedTheme]);

  if (!src) return null;

  return <Image src={src} alt={icon} width={25} height={25} />;
}

export default function ClientProjectCard({
  img,
  title,
  skills,
  liveSite,
}: Props) {
  return (
    <Card className="flex flex-col gap-5 p-6">
      <Card className="bg-purple-700/15 p-6 pb-0">
        <Image
          src={img}
          alt={title}
          width={500}
          height={500}
          className="w-full"
        />
      </Card>
      <CardTitle>{title}</CardTitle>
      <div className="flex items-center flex-wrap gap-3">
        {skills.map((skill) => {
          return <ClientProjectCardSkill key={skill.icon} {...skill} />;
        })}
      </div>
      <a href={liveSite} target="_blank">
        <Button className="w-full">Live demo</Button>
      </a>
    </Card>
  );
}
