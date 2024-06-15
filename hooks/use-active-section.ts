"use client";

import { useEffect, useState } from "react";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById("projects");
      const experienceSection = document.getElementById("experience");
      const contactSection = document.getElementById("contact");

      if (
        aboutSection &&
        scrollPosition < aboutSection.offsetTop + aboutSection.offsetHeight
      ) {
        setActiveSection("about");
      } else if (
        projectsSection &&
        scrollPosition <
          projectsSection.offsetTop + projectsSection.offsetHeight
      ) {
        setActiveSection("projects");
      } else if (
        experienceSection &&
        scrollPosition <
          experienceSection.offsetTop + experienceSection.offsetHeight
      ) {
        setActiveSection("experience");
      } else if (
        contactSection &&
        scrollPosition < contactSection.offsetTop + contactSection.offsetHeight
      ) {
        setActiveSection("contact");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { activeSection };
}
