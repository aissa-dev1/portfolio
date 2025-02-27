"use client";

import DynamicImage from "../dynamic-image";

export interface ProjectCardSkillProps {
  icon: string;
  dynamicIcon: boolean;
}

export function ProjectCardSkill({ icon, dynamicIcon }: ProjectCardSkillProps) {
  return (
    <DynamicImage
      src={`/skills/${icon}.svg`}
      alt={icon}
      width={25}
      height={25}
      forceStatic={!dynamicIcon}
    />
  );
}
