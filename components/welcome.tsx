import Image from "next/image";
import ArrowTopRightIcon from "./icons/arrowTopRight";
import { Button } from "./ui/button";
import LiveGradientText from "./liveGradientText";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4">
      <Image
        src="/me.jpg"
        alt="me"
        width={200}
        height={200}
        className="h-[200px] rounded-full"
      />
      <h3 className="text-5xl font-bold capitalize">
        Transforming ideas into <LiveGradientText text="online realities" />
      </h3>

      <p>Hi I&apos;m Aissa Bedr, a Full Stack Web Developer from Algeria.</p>
      <a
        href="https://github.com/aissa-dev1"
        target="_blank"
        className="w-full md:w-fit"
      >
        <Button className="flex items-center gap-1 w-full">
          <p>See my work</p>
          <ArrowTopRightIcon className="size-4" />
        </Button>
      </a>
    </div>
  );
}
