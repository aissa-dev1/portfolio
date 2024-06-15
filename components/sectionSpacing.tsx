import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {}

export default function SectionSpacing({
  className,
  children,
  ...rest
}: Props) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...rest}>
      {children}
    </div>
  );
}
