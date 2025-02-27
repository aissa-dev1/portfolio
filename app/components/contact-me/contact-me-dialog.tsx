"use client";

import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitEmail } from "@/hooks/use-submit-email";

export default function ContactMeDialog() {
  const { submitEmailData, setSubmitEmailData, submitEmail } = useSubmitEmail();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full md:w-fit">Contact me</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Let’s find solutions <span className="text-color">together?</span>‍
          </DialogTitle>
          <DialogDescription>
            Fill the form with your information and needs and submit, let the
            rest for me.
          </DialogDescription>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex__col gap-2">
              <Label htmlFor="name" className="w-fit">
                Your Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="someone"
                value={submitEmailData.name}
                onChange={(e) => {
                  setSubmitEmailData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="flex__col gap-2">
              <Label htmlFor="email" className="w-fit">
                Your Email
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="youremail@example.com"
                value={submitEmailData.email}
                onChange={(e) => {
                  setSubmitEmailData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="flex__col gap-2">
              <Label htmlFor="text" className="w-fit">
                Your text
              </Label>
              <Textarea
                id="text"
                placeholder="Your text here"
                value={submitEmailData.text}
                onChange={(e) => {
                  setSubmitEmailData((prev) => ({
                    ...prev,
                    text: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="not_a_robot">I am not a robot</Label>
              <Switch
                id="not_a_robot"
                checked={submitEmailData.notARobot}
                onClick={() => {
                  setSubmitEmailData((prev) => ({
                    ...prev,
                    notARobot: !prev.notARobot,
                  }));
                }}
              />
            </div>
          </div>
          <Button
            onClick={async () => {
              await submitEmail();
            }}
          >
            {submitEmailData.loading ? (
              <Loader childClassName="size-5 border-white" />
            ) : (
              "Submit"
            )}
          </Button>
          <DialogTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogTrigger>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
