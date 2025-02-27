"use client";

import { useState } from "react";
import {
  experienceData,
  experienceDataYears,
  ExperienceYear,
} from "@/data/experience";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function Experience() {
  const [experienceYear, setExperienceYear] = useState<ExperienceYear>("2022");

  return (
    <section id="experience" className="flex__col gap-section">
      <h3 className="section__heading">
        My <span className="text-color">Experience</span>
      </h3>
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
      <Card className="flex__col gap-6 p-6 lg:flex-row lg:items-center">
        <CardTitle className="text-2xl shrink-0">
          {experienceData[experienceYear].year}
        </CardTitle>
        <div className="flex__col gap-1">
          {experienceData[experienceYear].highlights.map((desc, index) => (
            <CardDescription key={index} className="flex items-center gap-1">
              - {desc}
            </CardDescription>
          ))}
        </div>
      </Card>
    </section>
  );
}
