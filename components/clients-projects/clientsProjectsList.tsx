"use client";

import { usePagination } from "@/hooks/use-pagination";
import ClientFullStackProjectCard from "./clientFullStackProjectCard";
import ClientProjectCard, { ClientProjectType } from "./clientProjectCard";
import { Button } from "../ui/button";
import { scrollToElement } from "@/utils/scroll-to-element";

interface Props {
  list: ClientProjectType[];
}

export default function ClientsProjectsList({ list }: Props) {
  const { page, setPage, pages, getPaginatedList } = usePagination(list, 2);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {getPaginatedList().map((project) => {
          switch (project.type) {
            case "full":
              return (
                <ClientFullStackProjectCard key={project.id} {...project} />
              );

            default:
              return <ClientProjectCard key={project.id} {...project} />;
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
                scrollToElement("clients_projects");
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
