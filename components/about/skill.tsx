"use client";

import Image from "next/image";
import { Badge } from "../ui/badge";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type SkillTypeIcon = {
  current: string;
  dynamicIcon: boolean;
};

export type SkillType = {
  id: string;
  icon: SkillTypeIcon;
  body: string;
};

interface Props extends SkillType {}

export default function Skill({ icon, body }: Props) {
  const { resolvedTheme } = useTheme();
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (!resolvedTheme) return;
    if (!icon.dynamicIcon) {
      setSrc(`/skills/${icon.current}.svg`);
      return;
    }

    setSrc(`/skills/${icon.current}-${resolvedTheme}.svg`);
  }, [resolvedTheme]);

  if (!src) return null;

  return (
    <Badge
      className="flex items-center justify-center lg:justify-start gap-2 py-2"
      variant="outline"
    >
      {icon && <Image src={src} alt={body} width={25} height={25} />}
      <p>{body}</p>
    </Badge>
  );
}
