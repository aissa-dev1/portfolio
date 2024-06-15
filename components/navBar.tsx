"use client";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import Container from "./container";
import useActiveSection from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  content: string;
  active: string;
  activeSection: string;
}

function NavLink({ href, content, active, activeSection }: NavLinkProps) {
  return (
    <a
      href={href}
      target="_self"
      className={cn(
        "p-0.5 rounded font-medium transition-colors duration-300 lg:px-4 lg:py-2",
        {
          "bg-purple-700 text-white": activeSection === active,
          "text-purple-700 hover:bg-purple-200 hover:text-purple-900":
            activeSection !== active,
        }
      )}
    >
      {content}
    </a>
  );
}

export default function NavBar() {
  useSmoothScroll();
  const { activeSection } = useActiveSection();

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-col justify-center h-28 shadow-sm shadow-black/10 bg-opacity-25 backdrop-blur-lg backdrop-filter z-10">
      <Container className="flex items-center justify-between gap-1 lg:justify-center lg:gap-4">
        <NavLink
          href="#about"
          content="About"
          active="about"
          activeSection={activeSection}
        />
        <NavLink
          href="#projects"
          content="Projects"
          active="projects"
          activeSection={activeSection}
        />
        <NavLink
          href="#experience"
          content="Experience"
          active="experience"
          activeSection={activeSection}
        />
        <NavLink
          href="#contact"
          content="Contact"
          active="contact"
          activeSection={activeSection}
        />
      </Container>
    </nav>
  );
}
