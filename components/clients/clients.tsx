import SectionSpacing from "../sectionSpacing";
import SectionStarter from "../sectionStarter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ClientCard from "./clientCard";
import { clients } from "@/data/clients";

function ClientsCarousel() {
  return (
    <Carousel className="w-full md:w-[600px] lg:w-[850px] xl:w-[1100px]">
      <CarouselContent>
        {clients.map((client) => (
          <CarouselItem key={client.id}>
            <ClientCard {...client} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default function Clients() {
  return (
    <SectionSpacing id="testimonials">
      <SectionStarter>
        Kind words from{" "}
        <span className="text-[var(--color)]">Satisfied Clients</span>
      </SectionStarter>
      <div className="flex items-center justify-center p-10 md:p-0">
        <ClientsCarousel />
      </div>
    </SectionSpacing>
  );
}
