import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {}

export default function Container({ className, children }: Props) {
  return <div className={cn("container", className)}>{children}</div>;
}
