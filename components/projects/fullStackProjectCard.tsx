"use client";

import { ProjectType } from "./projectCard";
import Image from "next/image";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props extends ProjectType {}

function DemoDialog({ liveSite }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Live demo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Demo Quick Note</DialogTitle>
          <DialogDescription>
            This is a Full Stack web project requiring both front-end and{" "}
            <span className="text-purple-700">back-end</span>. The front-end is
            running smoothly, but there might be a slight{" "}
            <span className="text-purple-700">delay</span> with the back-end as
            it’s on a <span className="text-purple-700">free plan</span>. Please
            allow up to <span className="text-purple-700">1 minute</span> for
            the initial server response. Thanks for your patience!
          </DialogDescription>
          <a href={liveSite} target="_blank">
            <Button className="w-full">Continue</Button>
          </a>
          <DialogTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogTrigger>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function RepoDialog({ githubRepo }: Props) {
  const repos = githubRepo as string[];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Github repo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Repo Quick Note</DialogTitle>
          <DialogDescription>
            This is a <span className="text-purple-700">Full Stack</span> web
            project requiring both{" "}
            <span className="text-purple-700">front-end</span> and{" "}
            <span className="text-purple-700">back-end</span>.
          </DialogDescription>
          {repos.map((repo, i) => (
            <a href={repo} target="_blank" key={repo}>
              <Button className="w-full">
                {i === 0 ? "Front End" : "Back End"}
              </Button>
            </a>
          ))}
          <DialogTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogTrigger>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default function FullStackProjectCard(props: Props) {
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
        <DemoDialog {...props} />
        <RepoDialog {...props} />
      </div>
    </Card>
  );
}
