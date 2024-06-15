import About from "@/components/about/about";
import ClientsProjects from "@/components/clients-projects/clientsProjects";
import Clients from "@/components/clients/clients";
import Container from "@/components/container";
import Experience from "@/components/experience/experience";
import Farewell from "@/components/farewell";
import Footer from "@/components/footer";
import Projects from "@/components/projects/projects";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <Container className="flex flex-col gap-28">
      <Welcome />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <ClientsProjects />
      <Farewell />
      <Footer />
    </Container>
  );
}
