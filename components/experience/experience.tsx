"use client";

import { useState } from "react";
import SectionSpacing from "../sectionSpacing";
import SectionStarter from "../sectionStarter";
import { Button } from "../ui/button";
import ExperienceCard, { ExperienceCardYear } from "./experienceCard";
import {
  experienceData2022,
  experienceData2023,
  experienceData2024,
} from "@/data/experience";

export default function Experience() {
  const [currentCard, setCurrentCard] = useState<ExperienceCardYear>("2022");

  return (
    <SectionSpacing id="experience">
      <SectionStarter>
        My <span className="text-[var(--color)]">Experience</span>
      </SectionStarter>
      <div className="grid grid-cols-3 gap-3">
        <Button
          variant={currentCard === "2022" ? "default" : "outline"}
          onClick={() => setCurrentCard("2022")}
        >
          2022
        </Button>
        <Button
          variant={currentCard === "2023" ? "default" : "outline"}
          onClick={() => setCurrentCard("2023")}
        >
          2023
        </Button>
        <Button
          variant={currentCard === "2024" ? "default" : "outline"}
          onClick={() => setCurrentCard("2024")}
        >
          2024
        </Button>
      </div>
      {currentCard === "2022" && <ExperienceCard {...experienceData2022} />}
      {currentCard === "2023" && <ExperienceCard {...experienceData2023} />}
      {currentCard === "2024" && <ExperienceCard {...experienceData2024} />}
    </SectionSpacing>
  );
}
