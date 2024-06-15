import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"h3"> {}

export default function SectionStarter({
  className,
  children,
  ...rest
}: Props) {
  return (
    <h3
      className={cn("text-3xl font-semibold text-center", className)}
      {...rest}
    >
      {children}
    </h3>
  );
}
