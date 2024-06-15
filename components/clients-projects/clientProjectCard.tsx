import Image from "next/image";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export type ClientProjectType = {
  id: string;
  img: string;
  title: string;
  type: "front" | "back" | "full" | "game";
  skills: string[];
  liveSite: string;
};

interface Props extends ClientProjectType {}

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
      <a href={liveSite} target="_blank">
        <Button className="w-full">Live demo</Button>
      </a>
    </Card>
  );
}
