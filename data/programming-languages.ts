import { SkillProps } from "@/components/skill";
import { random } from "@/utils/random";

export const programmingLanguages: SkillProps[] = [
  {
    id: random.PIN().toString(),
    icon: "js",
    dynamicIcon: false,
    body: "JavaScript",
  },
  {
    id: random.PIN().toString(),
    icon: "ts",
    dynamicIcon: false,
    body: "TypeScript",
  },
  {
    id: random.PIN().toString(),
    icon: "rust",
    dynamicIcon: false,
    body: "Rust",
  },
  {
    id: random.PIN().toString(),
    icon: "c-sharp",
    dynamicIcon: false,
    body: "C#",
  },
  {
    id: random.PIN().toString(),
    icon: "java",
    dynamicIcon: false,
    body: "Java",
  },
];
