"use client";

import { useState, useEffect } from "react";

interface Props {
  text: string;
}

export default function LiveGradientText({ text }: Props) {
  const [gradientStyle, setGradientStyle] = useState({});

  useEffect(() => {
    function updateGradient() {
      const angle = Math.random() * 360;
      const color1 = `hsl(${angle}, 100%, 50%)`;
      const color2 = `hsl(${(angle + 180) % 360}, 100%, 50%)`;

      setGradientStyle({
        backgroundImage: `linear-gradient(${angle}deg, ${color1}, ${color2})`,
      });
    }

    updateGradient();
    const interval = setInterval(updateGradient, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="text-5xl font-bold capitalize"
      style={{
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        ...gradientStyle,
      }}
    >
      {text}
    </span>
  );
}
