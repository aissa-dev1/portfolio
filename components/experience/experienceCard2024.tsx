import Image from "next/image";
import { Card, CardDescription, CardTitle } from "../ui/card";

export default function ExperienceCard2024() {
  return (
    <Card className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:col-span-2">
      <CardTitle className="shrink-0">2024</CardTitle>
      <div className="flex flex-col gap-1">
        <CardDescription>The year of the Back End.</CardDescription>
        <CardDescription>
          This leads to a Full Stack Web Developer.
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          Continue in Front End Web Development{" "}
          <Image src="/skills/solid.svg" alt="solid" width={25} height={25} />
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          Creating API after API, burning Node and Express js{" "}
          <Image src="/skills/nodejs.svg" alt="nodejs" width={25} height={25} />
        </CardDescription>
        <CardDescription>
          Learning new Back End concepts and try to apply them with the Front
          End.
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          Creating Full Stack Web Projects{" "}
          <Image src="/skills/nextjs.svg" alt="nextjs" width={25} height={25} />
          <Image src="/skills/nestjs.svg" alt="nestjs" width={25} height={25} />
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          Creating 2d Games with HTML Canvas and TypeScript{" "}
          <Image src="/skills/html.svg" alt="html" width={25} height={25} />
          <Image src="/skills/ts.svg" alt="ts" width={25} height={25} />
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          Exploring new land | Deno Land{" "}
          <Image src="/skills/deno.svg" alt="deno" width={25} height={25} />
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          Until now I am in love with{" "}
          <Image src="/skills/nestjs.svg" alt="nestjs" width={25} height={25} />
        </CardDescription>
      </div>
    </Card>
  );
}
