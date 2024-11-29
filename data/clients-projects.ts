import { ClientProjectType } from "@/components/clients-projects/clientProjectCard";
import { random } from "@/utils/random";

export const clientsProjects: ClientProjectType[] = [
  {
    id: random.strongId(),
    img: "/projects/digital-success.png",
    title: "Digital Success - Send Your Company to A Great Success",
    type: "full",
    skills: [
      {
        icon: "solid",
        dynamicIcon: false,
      },
      {
        icon: "ts",
        dynamicIcon: false,
      },
      {
        icon: "tailwindcss",
        dynamicIcon: false,
      },
      {
        icon: "expressjs",
        dynamicIcon: true,
      },
    ],
    liveSite: "https://digital-success.netlify.app",
  },
  {
    id: random.strongId(),
    img: "/projects/pea-app.png",
    title: "PEA App - An English Learning Platform",
    type: "full",
    skills: [
      {
        icon: "reactjs",
        dynamicIcon: false,
      },
      {
        icon: "ts",
        dynamicIcon: false,
      },
      {
        icon: "tailwindcss",
        dynamicIcon: false,
      },
      {
        icon: "zustand",
        dynamicIcon: false,
      },
      {
        icon: "nestjs",
        dynamicIcon: false,
      },
    ],
    liveSite: "https://pea-app.netlify.app",
  },
  {
    id: random.strongId(),
    img: "/projects/lomjati.png",
    title: "A fast food startup that provides healthy meals",
    type: "front",
    skills: [
      {
        icon: "nextjs",
        dynamicIcon: true,
      },
      {
        icon: "ts",
        dynamicIcon: false,
      },
      {
        icon: "tailwindcss",
        dynamicIcon: false,
      },
    ],
    liveSite: "https://lomjati.vercel.app",
  },
];
