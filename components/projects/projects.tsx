import { projects } from "@/data/projects";
import SectionSpacing from "../sectionSpacing";
import SectionStarter from "../sectionStarter";
import ProjectsList from "./projectsList";

export default function Projects() {
  return (
    <SectionSpacing id="projects">
      <SectionStarter>
        A selection of my <span className="text-color">Best Projects</span>
      </SectionStarter>
      <ProjectsList list={projects} />
    </SectionSpacing>
  );
}
