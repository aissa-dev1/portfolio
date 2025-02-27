"use client";

import { usePagination } from "@/hooks/use-pagination";
import { Button } from "../ui/button";
import { scrollToElement } from "@/utils/scroll-to-element";
import { ProjectCard, ProjectCardProps } from ".";

interface ProjectCardListProps {
  list: ProjectCardProps[];
  scrollToId: string;
  itemsPerPage: number;
}

export default function ProjectCardList({
  list,
  scrollToId,
  itemsPerPage,
}: ProjectCardListProps) {
  const { page, setPage, pages, getPaginatedList } = usePagination(
    list,
    itemsPerPage
  );

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {getPaginatedList().map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="w-full flex justify-between sm:w-1/2 sm:justify-evenly sm:mx-auto">
        {Array.from({ length: pages }).map((_, i) => (
          <Button
            key={i}
            onClick={() => {
              if (page !== i + 1) {
                setPage(i + 1);
                scrollToElement(scrollToId);
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
