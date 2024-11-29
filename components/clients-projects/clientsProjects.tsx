import { clientsProjects } from "@/data/clients-projects";
import SectionSpacing from "../sectionSpacing";
import SectionStarter from "../sectionStarter";
import ClientsProjectsList from "./clientsProjectsList";

export default function ClientsProjects() {
  return (
    <SectionSpacing>
      <SectionStarter>
        A selection of{" "}
        <span className="text-[var(--color)]">Clients Projects</span>
      </SectionStarter>
      <ClientsProjectsList list={clientsProjects} />
    </SectionSpacing>
  );
}
