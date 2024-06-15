import Image from "next/image";
import { Card, CardDescription, CardTitle } from "../ui/card";

export default function ExperienceCard2022() {
  return (
    <Card className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center">
      <CardTitle className="shrink-0">2022</CardTitle>
      <div className="flex flex-col gap-1">
        <CardDescription>The great journey started here.</CardDescription>
        <CardDescription className="flex items-center gap-1">
          Trying to make some basic structures using{" "}
          <Image src="/skills/html.svg" alt="html" width={25} height={25} />
          <Image src="/skills/css.svg" alt="css" width={22} height={22} />
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          It was hard at first but nothing impossible with{" "}
          <Image src="/skills/js.svg" alt="js" width={25} height={25} />
        </CardDescription>
        <CardDescription>
          I learned and practiced a lot in Front End Web Development.
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          First js library/framework that I used that time is{" "}
          <Image
            src="/skills/reactjs.svg"
            alt="reactjs"
            width={25}
            height={25}
          />
        </CardDescription>
        <CardDescription className="flex items-center gap-1">
          Loved technology{" "}
          <Image src="/skills/ts.svg" alt="ts" width={25} height={25} />
        </CardDescription>
      </div>
    </Card>
  );
}
