import { clientsProjects, projects } from "@/data";
import SectionSpacing from "../sectionSpacing";
import SectionStarter from "../sectionStarter";
import ClientsProjectsList from "./clientsProjectsList";

export default function ClientsProjects() {
  return (
    <SectionSpacing>
      <SectionStarter>
        A selection of <span className="text-purple-700">Clients Projects</span>
      </SectionStarter>
      <ClientsProjectsList list={clientsProjects} />
    </SectionSpacing>
  );
}