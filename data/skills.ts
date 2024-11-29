import { SkillType } from "@/components/about/skill";
import { random } from "@/utils/random";

export const skills: SkillType[] = [
  {
    id: random.id(),
    icon: { current: "html", dynamicIcon: false },
    body: "HTML",
  },
  {
    id: random.id(),
    icon: { current: "css", dynamicIcon: false },
    body: "CSS",
  },
  {
    id: random.id(),
    icon: { current: "scss", dynamicIcon: false },
    body: "Scss",
  },
  {
    id: random.id(),
    icon: { current: "reactjs", dynamicIcon: false },
    body: "React js",
  },
  {
    id: random.id(),
    icon: { current: "tailwindcss", dynamicIcon: false },
    body: "Tailwind css",
  },
  {
    id: random.id(),
    icon: { current: "redux", dynamicIcon: false },
    body: "Redux",
  },
  {
    id: random.id(),
    icon: { current: "nextjs", dynamicIcon: true },
    body: "Next js",
  },
  {
    id: random.id(),
    icon: { current: "redux", dynamicIcon: false },
    body: "Redux Toolkit",
  },
  {
    id: random.id(),
    icon: { current: "solid", dynamicIcon: false },
    body: "Solid js",
  },
  {
    id: random.id(),
    icon: { current: "zustand", dynamicIcon: false },
    body: "Zustand",
  },
  {
    id: random.id(),
    icon: { current: "nodejs", dynamicIcon: false },
    body: "Node js",
  },
  {
    id: random.id(),
    icon: { current: "expressjs", dynamicIcon: true },
    body: "Express js",
  },
  {
    id: random.id(),
    icon: { current: "nestjs", dynamicIcon: false },
    body: "Nest js",
  },
  {
    id: random.id(),
    icon: { current: "deno", dynamicIcon: false },
    body: "Deno js",
  },
  {
    id: random.id(),
    icon: { current: "git", dynamicIcon: false },
    body: "Git",
  },
  {
    id: random.id(),
    icon: { current: "vitejs", dynamicIcon: false },
    body: "Vite",
  },
];
