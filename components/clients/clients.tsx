"use client";

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
import Autoplay from "embla-carousel-autoplay";

function ClientsCarousel() {
  return (
    <Carousel
      className="w-full md:w-[600px] lg:w-[850px] xl:w-[1100px]"
      plugins={[Autoplay({ delay: 2000 })]}
    >
      <CarouselContent>
        {clients.map((client) => (
          <CarouselItem key={client.id}>
            <ClientCard {...client} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}

export default function Clients() {
  return (
    <SectionSpacing id="testimonials">
      <SectionStarter>
        Kind words from <span className="text-color">Satisfied Clients</span>
      </SectionStarter>
      <div className="flex items-center justify-center">
        <ClientsCarousel />
      </div>
    </SectionSpacing>
  );
}
