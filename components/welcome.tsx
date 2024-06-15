import ArrowTopRightIcon from "./icons/arrowTopRight";
import { Button } from "./ui/button";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4">
      <h3 className="text-5xl font-bold capitalize">
        Transforming ideas into{" "}
        <span className="text-purple-700">online realities</span>
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
