"use client";

import Image from "next/image";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type ProjectTypeSkill = {
  icon: string;
  dynamicIcon: boolean;
};

export type ProjectType = {
  id: string;
  img: string;
  title: string;
  description: string;
  type: "front" | "back" | "full" | "game";
  skills: ProjectTypeSkill[];
  liveSite: string;
  githubRepo: string | string[];
};

function ProjectCardSkill({ icon, dynamicIcon }: ProjectTypeSkill) {
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

interface Props extends ProjectType {}

export default function ProjectCard(props: Props) {
  return (
    <Card className="flex flex-col gap-5 p-6">
      <Card className="bg-blue-700/5 p-6 pb-0">
        <Image
          src={props.img}
          alt={props.title}
          width={500}
          height={500}
          className="w-full"
        />
      </Card>
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>{props.description}</CardDescription>
      <div className="flex items-center flex-wrap gap-3">
        {props.skills.map((skill) => {
          return <ProjectCardSkill key={skill.icon} {...skill} />;
        })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
        <a href={props.liveSite} target="_blank">
          <Button className="w-full">Live demo</Button>
        </a>
        <a href={props.githubRepo as string} target="_blank">
          <Button className="w-full">Github repo</Button>
        </a>
      </div>
    </Card>
  );
}
