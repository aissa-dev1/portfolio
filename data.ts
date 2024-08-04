import { SkillType } from "./components/about/skill";
import { ClientProjectType } from "./components/clients-projects/clientProjectCard";
import { ClientType } from "./components/clients/clientCard";
import { ProjectType } from "./components/projects/projectCard";

export const programmingLanguages: SkillType[] = [
  { id: "1", icon: { current: "js", dynamicIcon: false }, body: "JavaScript" },
  { id: "2", icon: { current: "ts", dynamicIcon: false }, body: "TypeScript" },
  { id: "3", icon: { current: "c-sharp", dynamicIcon: false }, body: "C#" },
  { id: "4", icon: { current: "java", dynamicIcon: false }, body: "Java" },
];

export const skills: SkillType[] = [
  { id: "1", icon: { current: "html", dynamicIcon: false }, body: "HTML" },
  { id: "2", icon: { current: "css", dynamicIcon: false }, body: "CSS" },
  { id: "3", icon: { current: "scss", dynamicIcon: false }, body: "Scss" },
  {
    id: "4",
    icon: { current: "reactjs", dynamicIcon: false },
    body: "React js",
  },
  {
    id: "5",
    icon: { current: "tailwindcss", dynamicIcon: false },
    body: "Tailwind css",
  },
  { id: "6", icon: { current: "redux", dynamicIcon: false }, body: "Redux" },
  {
    id: "7",
    icon: { current: "nextjs", dynamicIcon: true },
    body: "Next js",
  },
  {
    id: "8",
    icon: { current: "redux", dynamicIcon: false },
    body: "Redux Toolkit",
  },
  { id: "9", icon: { current: "solid", dynamicIcon: false }, body: "Solid js" },
  {
    id: "10",
    icon: { current: "zustand", dynamicIcon: false },
    body: "Zustand",
  },
  {
    id: "11",
    icon: { current: "nodejs", dynamicIcon: false },
    body: "Node js",
  },
  {
    id: "12",
    icon: { current: "expressjs", dynamicIcon: true },
    body: "Express js",
  },
  {
    id: "13",
    icon: { current: "nestjs", dynamicIcon: false },
    body: "Nest js",
  },
  { id: "14", icon: { current: "deno", dynamicIcon: false }, body: "Deno js" },
  { id: "15", icon: { current: "git", dynamicIcon: false }, body: "Git" },
  { id: "16", icon: { current: "vitejs", dynamicIcon: false }, body: "Vite" },
];

export const projects: ProjectType[] = [
  {
    id: "1",
    img: "/projects/poll-next.png",
    title: "Poll Next - Full Stack Polls Web Application",
    description:
      "Create your Poll Next account, create your own polls, share them with friends and wait their reactions and have fun.",
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
        icon: "redux",
        dynamicIcon: false,
      },
      {
        icon: "nestjs",
        dynamicIcon: false,
      },
    ],
    githubRepo: [
      "https://github.com/aissa-dev1/poll-next-client",
      "https://github.com/aissa-dev1/poll-next-api",
    ],
    liveSite: "https://poll-next.netlify.app",
  },
  {
    id: "2",
    img: "/projects/global-chat.png",
    title: "Global Chat - Full Stack Chat Web Application",
    description: "Join and chat with multiple users in real time.",
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
    githubRepo: [
      "https://github.com/aissa-dev1/global-chat-client",
      "https://github.com/aissa-dev1/global-chat",
    ],
    liveSite: "https://solid-global-chat.netlify.app",
  },
  {
    id: "3",
    img: "/projects/todo-app.png",
    title: "Todo App - Full Stack to-do Web Application",
    description:
      "Create your first account, create your tasks and play with them, they are saved forever don't worry.",
    type: "full",
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
      {
        icon: "redux",
        dynamicIcon: false,
      },
      {
        icon: "nestjs",
        dynamicIcon: false,
      },
    ],
    githubRepo: [
      "https://github.com/aissa-dev1/todo-app-client",
      "https://github.com/aissa-dev1/todo-app-api",
    ],
    liveSite: "https://aissa-dev1-todo-app.vercel.app",
  },
  {
    id: "4",
    img: "/projects/next-dashboard.png",
    title: "Next Dashboard - Solid Front End Project",
    description:
      "You want to explore a new world of all web techniques out there? you need to try.",
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
      {
        icon: "redux",
        dynamicIcon: false,
      },
    ],
    githubRepo: "https://github.com/aissa-dev1/next-dashboard",
    liveSite: "https://aissa-dev1-next-dashboard.netlify.app",
  },
  {
    id: "5",
    img: "/projects/calculator.png",
    title: "Calculator - Microsoft Calculator Clone",
    description: "Fully functional calculator with a lot of features.",
    type: "front",
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
    ],
    githubRepo: "https://github.com/aissa-dev1/calculator",
    liveSite: "https://solid-calculator.netlify.app",
  },
  {
    id: "6",
    img: "/projects/budget-app.png",
    title: "Budget App - Best Vanilla TypeScript Project",
    description:
      "Do you remember when you have a budget to shop, then have a list of products you don't know from where to start! you will start here.",
    type: "front",
    skills: [
      {
        icon: "html",
        dynamicIcon: false,
      },
      {
        icon: "scss",
        dynamicIcon: false,
      },
      {
        icon: "ts",
        dynamicIcon: false,
      },
    ],
    githubRepo: "https://github.com/aissa-dev1/budgets-app",
    liveSite: "https://aissa-dev1-budgets-app.netlify.app",
  },
  {
    id: "7",
    img: "/projects/astro-evade.png",
    title: "Astro Evade - Save The Space",
    description:
      "From where, we don't know how the space is invaded your goal is to save it from the evil around it.",
    type: "front",
    skills: [
      {
        icon: "html",
        dynamicIcon: false,
      },
      {
        icon: "css",
        dynamicIcon: false,
      },
      {
        icon: "ts",
        dynamicIcon: false,
      },
    ],
    githubRepo: "https://github.com/aissa-dev1/astro-evade",
    liveSite: "https://aissa-dev1-astro-evade.netlify.app",
  },
  {
    id: "8",
    img: "/projects/memory-game.png",
    title: "Memory Game - Solid Game",
    description:
      "Do you have a strong memory to play this game? If yes join the maze.",
    type: "front",
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
    ],
    githubRepo: "https://github.com/aissa-dev1/memory-game",
    liveSite: "https://aissa-dev1-memory-game.netlify.app",
  },
];

export const clients: ClientType[] = [
  {
    id: "1",
    fullName: "Soufiane The Great",
    message:
      "Perfect person. Finished the job. no complaints. Really fast. and responding all of the time even Saturday and Sunday.",
  },
  {
    id: "2",
    fullName: "Akram Ouaked",
    message:
      "Literally an artist. Every new feature he adds, he gets creative with it.",
  },
  { id: "3", fullName: "Alia", message: "Aissa Bedr is a master of his work." },
];

export const clientsProjects: ClientProjectType[] = [
  {
    id: "1",
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
    id: "2",
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
];
