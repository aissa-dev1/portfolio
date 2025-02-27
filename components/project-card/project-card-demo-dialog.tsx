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

interface ProjectCardDemoDialogProps extends ProjectCardProps {}

export default function ProjectCardDemoDialog({
  liveSite,
}: ProjectCardDemoDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Live demo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex__col gap-3">
          <DialogTitle>Demo Quick Note</DialogTitle>
          <DialogDescription>
            This is a Full Stack web project requiring both front-end and{" "}
            <span className="text-color">back-end</span>. The front-end is
            running smoothly, but there might be a slight{" "}
            <span className="text-color">delay</span> with the back-end as it’s
            on a <span className="text-color">free plan</span>. Please allow up
            to <span className="text-color">1 minute</span> for the initial
            server response. Thanks for your patience!
          </DialogDescription>
          <div className="flex__col gap-2 w-full">
            <a href={liveSite} target="_blank">
              <Button className="w-full">Continue</Button>
            </a>
            <DialogTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogTrigger>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
