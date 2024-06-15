"use client";

import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    function smoothScroll(event: Event) {
      event.preventDefault();
      const target = event.target as HTMLElement;
      const targetId = target.getAttribute("href")?.slice(1);
      const targetElement = document.getElementById(targetId || "");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);
}
