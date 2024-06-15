import ClientFullStackProjectCard from "./clientFullStackProjectCard";
import ClientProjectCard, { ClientProjectType } from "./clientProjectCard";

interface Props {
  list: ClientProjectType[];
}

export default function ClientsProjectsList({ list }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {list.map((project) => {
        switch (project.type) {
          case "full":
            return <ClientFullStackProjectCard key={project.id} {...project} />;

          default:
            return <ClientProjectCard key={project.id} {...project} />;
        }
      })}
    </div>
  );
}
