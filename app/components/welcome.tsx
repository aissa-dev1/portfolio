import Image from "next/image";
import ArrowTopRightIcon from "../../components/icons/arrow-top-right";
import { Button } from "../../components/ui/button";

export default function Welcome() {
  return (
    <div className="flex__col flex__center text-center gap-4">
      <Image
        className="rounded-full"
        src="/aissa.jpg"
        alt="Aissa Image - Like Cartoon Version"
        width={200}
        height={200}
      />
      <div className="flex__col items-center gap-2 text-3xl lg:flex-row">
        <span>Hello world, I&apos;m</span>
        <h1
          className="font-bold shrink-0"
          title="Aissa Bedr"
          aria-label="Aissa Bedr"
        >
          Aissa Bedr
        </h1>
      </div>
      <h3 className="text-2xl font-medium capitalize text-color">
        {"@"}Full stack web developer
      </h3>
      <p className="text-lg capitalize">
        Transforming ideas into{" "}
        <span className="text-color">online realities</span>
      </p>
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
