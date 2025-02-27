"use client";

import { createDynamicImgSrc } from "@/utils/create-dynamic-img-src";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface UseDynamicImgSrcOptions {
  imgSrc: string;
  forceStatic?: boolean;
}

export function useDynamicImgSrc({
  imgSrc,
  forceStatic = false,
}: UseDynamicImgSrcOptions) {
  const { resolvedTheme } = useTheme();
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (!resolvedTheme) return;
    if (forceStatic) {
      setSrc(imgSrc);
      return;
    }

    setSrc(createDynamicImgSrc(imgSrc, resolvedTheme));
  }, [resolvedTheme]);

  return { src, setSrc };
}
