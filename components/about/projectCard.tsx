import Image from "next/image";
import { Card, CardTitle } from "../ui/card";

export default function ProjectCard() {
  return (
    <Card className="p-6 bg-gradient-to-r from-blue-700/5 to-purple-700/15">
      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2">
        <Image src="/about/project.svg" alt="project" width={75} height={75} />
        <CardTitle className="text-center lg:text-start">
          Expert in speaking on business topics and technology projects.
        </CardTitle>
      </div>
    </Card>
  );
}
