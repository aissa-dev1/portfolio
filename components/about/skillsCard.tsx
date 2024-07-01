import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import Skills from "./skills";
import { programmingLanguages, skills } from "@/data";

export function SkillsCard() {
  return (
    <Card className="bg-blue-700/5">
      <CardHeader>
        <CardDescription className="text-center lg:text-start">
          I always learn new skills in my field and improve my Tech Stack
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <CardDescription className="text-center lg:text-start">
            Programming languages
          </CardDescription>
          <Skills list={programmingLanguages} />
        </div>
        <div className="flex flex-col gap-2">
          <CardDescription className="text-center lg:text-start">
            Web skills
          </CardDescription>
          <Skills list={skills} />
        </div>
      </CardContent>
    </Card>
  );
}
