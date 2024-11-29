"use client";

import { programmingLanguages } from "@/data/programming-languages";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import Skills from "./skills";
import { skills } from "@/data/skills";
import { Button } from "../ui/button";
import { useState } from "react";

type SkillsCardSection = "programming-languages" | "web-skills";

export function SkillsCard() {
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
          <div className="flex flex-col gap-2">
            <CardDescription className="text-center lg:text-start">
              Programming languages
            </CardDescription>
            <Skills list={programmingLanguages} />
          </div>
        )}
        {currentSection === "web-skills" && (
          <div className="flex flex-col gap-2">
            <CardDescription className="text-center lg:text-start">
              Web skills
            </CardDescription>
            <Skills list={skills} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
