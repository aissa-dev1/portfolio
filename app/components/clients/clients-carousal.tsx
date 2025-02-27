"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { clients } from "@/data/clients";
import Autoplay from "embla-carousel-autoplay";

export default function ClientsCarousel() {
  return (
    <Carousel
      className="w-full md:w-[600px] lg:w-[850px] xl:w-[1100px]"
      plugins={[Autoplay({ delay: 2000 }) as any]}
    >
      <CarouselContent>
        {clients.map((client) => (
          <CarouselItem key={client.id}>
            <Card className="h-52 flex__col justify-center gap-4 p-6">
              <CardTitle>{client.fullName || "Client"}</CardTitle>
              <CardDescription>&quot;{client.message}&quot;</CardDescription>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
