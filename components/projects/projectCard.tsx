import Image from "next/image";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export type ProjectType = {
  id: string;
  img: string;
  title: string;
  description: string;
  type: "front" | "back" | "full" | "game";
  skills: string[];
  liveSite: string;
  githubRepo: string | string[];
};

interface Props extends ProjectType {}

export default function ProjectCard({
  img,
  title,
  description,
  skills,
  liveSite,
  githubRepo,
}: Props) {
  return (
    <Card className="flex flex-col gap-5 p-6">
      <Card className="bg-blue-700/5 p-6 pb-0">
        <Image
          src={img}
          alt={title}
          width={500}
          height={500}
          className="w-full"
        />
      </Card>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <div className="flex items-center flex-wrap gap-3">
        {skills.map((skill) => {
          return (
            <Image
              key={skill}
              src={`/skills/${skill}.svg`}
              alt={skill}
              width={25}
              height={25}
            />
          );
        })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
        <a href={liveSite} target="_blank">
          <Button className="w-full">Live demo</Button>
        </a>
        <a href={githubRepo as string} target="_blank">
          <Button className="w-full">Github repo</Button>
        </a>
      </div>
    </Card>
  );
}
