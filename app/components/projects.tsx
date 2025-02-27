import ProjectCardList from "@/components/project-card/project-card-list";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="flex__col gap-section">
      <h3 className="section__heading">
        A selection of my <span className="text-color">Best Projects</span>
      </h3>
      <ProjectCardList list={projects} scrollToId="projects" itemsPerPage={4} />
    </section>
  );
}
