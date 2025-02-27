"use client";

import { Badge } from "./ui/badge";
import DynamicImage from "./dynamic-image";

export interface SkillProps {
  id: string;
  icon: string;
  dynamicIcon: boolean;
  body: string;
}

export default function Skill({ icon, dynamicIcon, body }: SkillProps) {
  return (
    <Badge
      className="flex__center lg:justify-start gap-2 py-2"
      variant="outline"
    >
      <DynamicImage
        src={`/skills/${icon}.svg`}
        alt={body}
        width={25}
        height={25}
        forceStatic={!dynamicIcon}
      />
      <p>{body}</p>
    </Badge>
  );
}
