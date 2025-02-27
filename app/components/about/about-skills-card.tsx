"use client";

import { programmingLanguages } from "@/data/programming-languages";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "../../../components/ui/card";
import { skills } from "@/data/skills";
import { Button } from "../../../components/ui/button";
import { useState } from "react";
import Skill from "../../../components/skill";

type SkillsCardSection = "programming-languages" | "web-skills";

export default function AboutSkillsCard() {
  const [currentSection, setCurrentSection] = useState<SkillsCardSection>(
    "programming-languages"
  );

  return (
    <Card className="bg-blue-700/5">
      <CardHeader>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Button
            variant={
              currentSection === "programming-languages"
                ? "default"
                : "secondary"
            }
            onClick={() => setCurrentSection("programming-languages")}
          >
            Programming languages
          </Button>
          <Button
            variant={currentSection === "web-skills" ? "default" : "secondary"}
            onClick={() => setCurrentSection("web-skills")}
          >
            Web skills
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {currentSection === "programming-languages" && (
          <div className="flex__col gap-2">
            <CardDescription className="text-center lg:text-start">
              Programming languages
            </CardDescription>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4 xl:gap-5">
              {programmingLanguages.map((programmingLanguage) => (
                <Skill key={programmingLanguage.id} {...programmingLanguage} />
              ))}
            </div>
          </div>
        )}
        {currentSection === "web-skills" && (
          <div className="flex__col gap-2">
            <CardDescription className="text-center lg:text-start">
              Web skills
            </CardDescription>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4 xl:gap-5">
              {skills.map((skill) => (
                <Skill key={skill.id} {...skill} />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
