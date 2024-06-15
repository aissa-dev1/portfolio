import SectionSpacing from "../sectionSpacing";
import SectionStarter from "../sectionStarter";
import MyEmailCard from "./myEmailCard";
import ProjectCard from "./projectCard";
import { SkillsCard } from "./skillsCard";
import TimeCard from "./timeCard";
import WorkCard from "./workCard";

export default function About() {
  return (
    <SectionSpacing id="about">
      <SectionStarter>
        Who is <span className="text-purple-700">Aissa Bedr?</span>
      </SectionStarter>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <ProjectCard />
          <TimeCard />
        </div>
        <div className="grid grid-cols-1">
          <SkillsCard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <WorkCard />
          <MyEmailCard />
        </div>
      </div>
    </SectionSpacing>
  );
}
