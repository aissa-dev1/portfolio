import { Colors } from "@/constants";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function useColor() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    document.body.classList.remove(...Object.keys(Colors));
    if (resolvedTheme === "light") {
      document.body.classList.add("color-purple-bright");
    } else document.body.classList.add("color-cyan");
  }, [resolvedTheme]);
}
