"use client";

import { useState } from "react";
import SectionSpacing from "../sectionSpacing";
import SectionStarter from "../sectionStarter";
import { Button } from "../ui/button";
import ExperienceCard, { ExperienceCardData } from "./experienceCard";
import {
  experienceData,
  experienceDataYears,
  ExperienceYear,
} from "@/data/experience";

export default function Experience() {
  const [experienceYear, setExperienceYear] = useState<ExperienceYear>("2022");

  return (
    <SectionSpacing id="experience">
      <SectionStarter>
        My <span className="text-color">Experience</span>
      </SectionStarter>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-3">
        {experienceDataYears.map((year) => (
          <Button
            key={year}
            variant={experienceYear === year ? "default" : "secondary"}
            onClick={() => setExperienceYear(year)}
          >
            {year}
          </Button>
        ))}
      </div>
      <ExperienceCard
        {...(experienceData[experienceYear] as ExperienceCardData)}
      />
    </SectionSpacing>
  );
}
