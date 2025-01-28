"use client";

import { scrollToElement } from "@/utils/scroll-to-element";
import { Button } from "../ui/button";
import FullStackProjectCard from "./fullStackProjectCard";
import ProjectCard, { ProjectType } from "./projectCard";
import { usePagination } from "@/hooks/use-pagination";

interface Props {
  list: ProjectType[];
}

export default function ProjectsList({ list }: Props) {
  const { page, setPage, pages, getPaginatedList } = usePagination(list, 4);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {getPaginatedList().map((project, i) => {
          switch (project.type) {
            case "full":
              return <FullStackProjectCard key={project.id} {...project} />;

            default:
              return <ProjectCard key={project.id} {...project} />;
          }
        })}
      </div>
      <div className="w-full flex justify-between sm:w-1/2 sm:justify-evenly sm:mx-auto">
        {Array.from({ length: pages }).map((_, i) => (
          <Button
            key={i}
            onClick={() => {
              if (page !== i + 1) {
                setPage(i + 1);
                scrollToElement("projects");
              }
            }}
            variant={page === i + 1 ? "default" : "outline"}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </>
  );
}
