import { ProjectCardProps } from ".";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface ProjectCardRepoDialogProps extends ProjectCardProps {}

export default function ProjectCardRepoDialog({
  githubRepo,
}: ProjectCardRepoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Github repo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex__col gap-3.5">
          <DialogTitle>Repo Quick Note</DialogTitle>
          <DialogDescription>
            This is a <span className="text-color">Full Stack</span> web project
            requiring both <span className="text-color">front-end</span> and{" "}
            <span className="text-color">back-end</span>.
          </DialogDescription>
          <div className="flex__col gap-2">
            {(githubRepo as string[]).map((repo, i) => (
              <a href={repo} target="_blank" key={repo}>
                <Button className="w-full">
                  {i === 0 ? "Front End" : "Back End"}
                </Button>
              </a>
            ))}
            <DialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogTrigger>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
