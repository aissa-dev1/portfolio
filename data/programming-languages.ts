import { SkillType } from "@/components/about/skill";
import { random } from "@/utils/random";

export const programmingLanguages: SkillType[] = [
  {
    id: random.PIN().toString(),
    icon: { current: "js", dynamicIcon: false },
    body: "JavaScript",
  },
  {
    id: random.PIN().toString(),
    icon: { current: "ts", dynamicIcon: false },
    body: "TypeScript",
  },
  {
    id: random.PIN().toString(),
    icon: { current: "rust", dynamicIcon: false },
    body: "Rust",
  },
  {
    id: random.PIN().toString(),
    icon: { current: "c-sharp", dynamicIcon: false },
    body: "C#",
  },
  {
    id: random.PIN().toString(),
    icon: { current: "java", dynamicIcon: false },
    body: "Java",
  },
];
