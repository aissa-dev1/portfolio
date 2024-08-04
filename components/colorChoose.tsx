"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Colors } from "@/constants";

export function ColorChoose() {
  const [color, setColor] = useState(
    localStorage.getItem("color") || "color-purple"
  );

  useEffect(() => {
    document.body.classList.remove(...Object.keys(Colors));
    document.body.classList.add(color);
    localStorage.setItem("color", color);
  }, [color]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <div className="size-4 rounded-full bg-[var(--color)]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.keys(Colors).map((colorKey) => (
          <DropdownMenuItem
            key={colorKey}
            className="flex items-center justify-center"
            onClick={() => {
              setColor(colorKey);
            }}
          >
            <span
              className="size-4 rounded-full"
              style={{
                backgroundColor: Colors[colorKey as keyof typeof Colors],
              }}
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
