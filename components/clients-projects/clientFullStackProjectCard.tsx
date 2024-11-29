"use client";

import Image from "next/image";
import { Card, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ClientProjectType, ClientProjectTypeSkill } from "./clientProjectCard";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props extends ClientProjectType {}

function DemoDialog({ liveSite }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Live demo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-3.5">
          <DialogTitle>Demo Quick Note</DialogTitle>
          <DialogDescription>
            This is a Full Stack web project requiring both front-end and{" "}
            <span className="text-[var(--color)]">back-end</span>. The front-end
            is running smoothly, but there might be a slight{" "}
            <span className="text-[var(--color)]">delay</span> with the back-end
            as it’s on a <span className="text-[var(--color)]">free plan</span>.
            Please allow up to{" "}
            <span className="text-[var(--color)]">1 minute</span> for the
            initial server response. Thanks for your patience!
          </DialogDescription>
          <div className="flex flex-col gap-2 w-full">
            <a href={liveSite} target="_blank">
              <Button className="w-full">Continue</Button>
            </a>
            <DialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogTrigger>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function ClientFullStackProjectCardSkill({
  icon,
  dynamicIcon,
}: ClientProjectTypeSkill) {
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

export default function ClientFullStackProjectCard(props: Props) {
  return (
    <Card className="flex flex-col gap-5 p-6">
      <Card className="bg-purple-700/15 p-6 pb-0">
        <Image
          src={props.img}
          alt={props.title}
          width={500}
          height={500}
          className="w-full"
        />
      </Card>
      <CardTitle>{props.title}</CardTitle>
      <div className="flex items-center flex-wrap gap-3">
        {props.skills.map((skill) => {
          return (
            <ClientFullStackProjectCardSkill key={skill.icon} {...skill} />
          );
        })}
      </div>
      <DemoDialog {...props} />
    </Card>
  );
}
