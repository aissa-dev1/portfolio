import SectionSpacing from "../sectionSpacing";
import SectionStarter from "../sectionStarter";
import ExperienceCard2022 from "./experienceCard2022";
import ExperienceCard2023 from "./experienceCard2023";
import ExperienceCard2024 from "./experienceCard2024";

export default function Experience() {
  return (
    <SectionSpacing id="experience">
      <SectionStarter>
        My <span className="text-[var(--color)]">Experience</span>
      </SectionStarter>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ExperienceCard2022 />
        <ExperienceCard2023 />
        <ExperienceCard2024 />
      </div>
    </SectionSpacing>
  );
}
