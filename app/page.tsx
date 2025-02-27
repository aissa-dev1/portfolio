import Footer from "@/components/footer";
import Projects from "./components/projects";
import ClientsProjects from "./components/clients-projects";
import Welcome from "./components/welcome";
import About from "./components/about";
import Clients from "./components/clients";
import Experience from "./components/experience";
import ContactMe from "./components/contact-me";

export default function Home() {
  return (
    <main className="container flex__col gap-sections mt-main">
      <Welcome />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <ClientsProjects />
      <ContactMe />
      <Footer />
    </main>
  );
}
