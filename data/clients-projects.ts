import { ProjectCardProps } from "@/components/project-card";
import { random } from "@/utils/random";

export const clientsProjects: ProjectCardProps[] = [
  {
    id: random.strongId(),
    img: "/projects/digital-success.png",
    title: "Digital Success",
    description: "Send Your Company to A Great Success",
    type: "full-free",
    for: "client",
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
    title: "PEA App",
    description: "An English Learning Platform",
    type: "full-free",
    for: "client",
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
    title: "Lomjati",
    description: "A fast food startup that provides healthy meals",
    type: "front",
    for: "client",
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
