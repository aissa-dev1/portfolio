"use client";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import useActiveSection from "@/hooks/use-active-section";
import NavBarLink from "./nav-bar-link";
import { ModeToggle } from "../mode-toggle";

export default function NavBar() {
  useSmoothScroll();
  const { activeSection } = useActiveSection();

  return (
    <nav className="fixed top-0 left-0 w-full flex__col justify-center h-navbar shadow-sm shadow-black/10 dark:shadow-white/10 bg-opacity-25 backdrop-blur-lg backdrop-filter z-10">
      <div className="container flex items-center justify-between gap-1 lg:justify-center lg:gap-4">
        <NavBarLink
          href="#about"
          content="About"
          active="about"
          activeSection={activeSection}
        />
        <NavBarLink
          href="#projects"
          content="Projects"
          active="projects"
          activeSection={activeSection}
        />
        <NavBarLink
          href="#experience"
          content="Experience"
          active="experience"
          activeSection={activeSection}
        />
        <NavBarLink
          href="#contact"
          content="Contact"
          active="contact"
          activeSection={activeSection}
        />
        <ModeToggle />
      </div>
    </nav>
  );
}
