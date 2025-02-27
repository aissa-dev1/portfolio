import { SkillProps } from "@/components/skill";
import { random } from "@/utils/random";

export const skills: SkillProps[] = [
  {
    id: random.id(),
    icon: "html",
    dynamicIcon: false,
    body: "HTML",
  },
  {
    id: random.id(),
    icon: "css",
    dynamicIcon: false,
    body: "CSS",
  },
  {
    id: random.id(),
    icon: "scss",
    dynamicIcon: false,
    body: "Scss",
  },
  {
    id: random.id(),
    icon: "reactjs",
    dynamicIcon: false,
    body: "React js",
  },
  {
    id: random.id(),
    icon: "tailwindcss",
    dynamicIcon: false,
    body: "Tailwind css",
  },
  {
    id: random.id(),
    icon: "redux",
    dynamicIcon: false,
    body: "Redux",
  },
  {
    id: random.id(),
    icon: "nextjs",
    dynamicIcon: true,
    body: "Next js",
  },
  {
    id: random.id(),
    icon: "redux",
    dynamicIcon: false,
    body: "Redux Toolkit",
  },
  {
    id: random.id(),
    icon: "solid",
    dynamicIcon: false,
    body: "Solid js",
  },
  {
    id: random.id(),
    icon: "zustand",
    dynamicIcon: false,
    body: "Zustand",
  },
  {
    id: random.id(),
    icon: "nodejs",
    dynamicIcon: false,
    body: "Node js",
  },
  {
    id: random.id(),
    icon: "expressjs",
    dynamicIcon: true,
    body: "Express js",
  },
  {
    id: random.id(),
    icon: "nestjs",
    dynamicIcon: false,
    body: "Nest js",
  },
  {
    id: random.id(),
    icon: "deno",
    dynamicIcon: false,
    body: "Deno js",
  },
  {
    id: random.id(),
    icon: "git",
    dynamicIcon: false,
    body: "Git",
  },
  {
    id: random.id(),
    icon: "vitejs",
    dynamicIcon: false,
    body: "Vite",
  },
];
