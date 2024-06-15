import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import Skills from "./skills";
import { skills } from "@/data";

export function SkillsCard() {
  return (
    <Card className="bg-blue-700/5">
      <CardHeader>
        <CardDescription className="text-center lg:text-start">
          I always learn new skills in my field and improve my Tech Stack:
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skills list={skills} />
      </CardContent>
    </Card>
  );
}
