import FullStackProjectCard from "./fullStackProjectCard";
import ProjectCard, { ProjectType } from "./projectCard";

interface Props {
  list: ProjectType[];
}

export default function ProjectsList({ list }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {list.map((project) => {
        switch (project.type) {
          case "full":
            return <FullStackProjectCard key={project.id} {...project} />;

          default:
            return <ProjectCard key={project.id} {...project} />;
        }
      })}
    </div>
  );
}
