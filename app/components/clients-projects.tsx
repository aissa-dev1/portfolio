import ProjectCardList from "@/components/project-card/project-card-list";
import { clientsProjects } from "@/data/clients-projects";

export default function ClientsProjects() {
  return (
    <section id="clients_projects" className="flex__col gap-section">
      <h3 className="section__heading">
        A selection of <span className="text-color">Clients Projects</span>
      </h3>
      <ProjectCardList
        list={clientsProjects}
        scrollToId="clients_projects"
        itemsPerPage={2}
      />
    </section>
  );
}
