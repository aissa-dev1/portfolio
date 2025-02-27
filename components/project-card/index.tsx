"use client";

import Image from "next/image";
import { ProjectCardSkill, ProjectCardSkillProps } from "./project-card-skill";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";
import ProjectCardDemoDialog from "./project-card-demo-dialog";
import ProjectCardRepoDialog from "./project-card-repo-dialog";

export type ProjectCardType = "front" | "full" | "full-free" | "game";

export type ProjectCardFor = "me" | "client";

export interface ProjectCardProps {
  id: string;
  img: string;
  title: string;
  description: string;
  type: ProjectCardType;
  for: ProjectCardFor;
  skills: ProjectCardSkillProps[];
  liveSite: string;
  githubRepo?: string | string[];
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <Card className="flex__col gap-5 p-6">
      <Card className="bg-blue-700/5 p-6 pb-0">
        <Image
          src={props.img}
          alt={props.title}
          width={500}
          height={500}
          className="w-full"
        />
      </Card>
      <div className="flex__col gap-2.5">
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </div>
      <div className="flex items-center flex-wrap gap-3">
        {props.skills.map((skill) => {
          return <ProjectCardSkill key={skill.icon} {...skill} />;
        })}
      </div>
      {props.for === "client" ? (
        props.type === "full-free" ? (
          <ProjectCardDemoDialog {...props} />
        ) : (
          <a href={props.liveSite} target="_blank">
            <Button className="w-full">Live demo</Button>
          </a>
        )
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
          {props.type === "full-free" ? (
            <>
              <ProjectCardDemoDialog {...props} />
              <ProjectCardRepoDialog {...props} />
            </>
          ) : (
            <>
              <a href={props.liveSite} target="_blank">
                <Button className="w-full">Live demo</Button>
              </a>
              <a href={props.githubRepo as string} target="_blank">
                <Button className="w-full">Github repo</Button>
              </a>
            </>
          )}
        </div>
      )}
    </Card>
  );
}
