import { SkillType } from "./components/about/skill";
import { ClientProjectType } from "./components/clients-projects/clientProjectCard";
import { ClientType } from "./components/clients/clientCard";
import { ProjectType } from "./components/projects/projectCard";

export const skills: SkillType[] = [
  { id: "1", icon: "/skills/html.svg", body: "HTML" },
  { id: "2", icon: "/skills/css.svg", body: "CSS" },
  { id: "3", icon: "/skills/js.svg", body: "JavaScript" },
  { id: "4", icon: "/skills/scss.svg", body: "Scss" },
  { id: "5", icon: "/skills/ts.svg", body: "TypeScript" },
  { id: "6", icon: "/skills/reactjs.svg", body: "ReactJs" },
  { id: "7", icon: "/skills/tailwindcss.svg", body: "TailwindCss" },
  { id: "8", icon: "/skills/redux.svg", body: "Redux" },
  { id: "9", icon: "/skills/nextjs.svg", body: "NextJs" },
  { id: "10", icon: "/skills/redux.svg", body: "ReduxToolkit" },
  { id: "11", icon: "/skills/solid.svg", body: "SolidJs" },
  { id: "12", icon: "/skills/zustand.svg", body: "Zustand" },
  { id: "13", icon: "/skills/nodejs.svg", body: "NodeJs" },
  { id: "14", icon: "/skills/expressjs.svg", body: "ExpressJs" },
  { id: "15", icon: "/skills/nestjs.svg", body: "NestJs" },
  { id: "16", icon: "/skills/git.svg", body: "Git" },
  { id: "17", icon: "/skills/vitejs.svg", body: "Vite" },
];

export const projects: ProjectType[] = [
  {
    id: "1",
    img: "/projects/poll-next.png",
    title: "Poll Next - Full Stack Polls Web Application",
    description:
      "Create your Poll Next account, create your own polls, share them with friends and wait their reactions and have fun.",
    type: "full",
    skills: ["reactjs", "ts", "tailwindcss", "redux", "nestjs"],
    githubRepo: [
      "https://github.com/aissa-dev1/poll-next-client",
      "https://github.com/aissa-dev1/poll-next-api",
    ],
    liveSite: "https://poll-next.netlify.app",
  },
  {
    id: "2",
    img: "/projects/todo-app.png",
    title: "Todo App - Full Stack to-do Web Application",
    description:
      "Create your first account, create your tasks and play with them, they are saved forever don't worry.",
    type: "full",
    skills: ["nextjs", "ts", "tailwindcss", "redux", "nestjs"],
    githubRepo: [
      "https://github.com/aissa-dev1/todo-app-client",
      "https://github.com/aissa-dev1/todo-app-api",
    ],
    liveSite: "https://aissa-dev1-todo-app.vercel.app",
  },
  {
    id: "3",
    img: "/projects/next-dashboard.png",
    title: "Next Dashboard - Solid Front End Project",
    description:
      "You want to explore a new world of all web techniques out there? you need to try.",
    type: "front",
    skills: ["nextjs", "ts", "tailwindcss", "redux"],
    githubRepo: "https://github.com/aissa-dev1/next-dashboard",
    liveSite: "https://aissa-dev1-next-dashboard.netlify.app",
  },
  {
    id: "4",
    img: "/projects/budgets-app.png",
    title: "Budgets App - Best Vanilla TypeScript Project",
    description:
      "Do you remember when you have a budget to shop, then have a list of products you don't know from where to start! you will start here.",
    type: "front",
    skills: ["html", "scss", "ts"],
    githubRepo: "https://github.com/aissa-dev1/budgets-app",
    liveSite: "https://aissa-dev1-budgets-app.netlify.app",
  },
  {
    id: "5",
    img: "/projects/astro-evade.png",
    title: "Astro Evade - Save The Space",
    description:
      "From where, we don't know how the space is invaded your goal is to save it from the evil around it.",
    type: "front",
    skills: ["html", "css", "ts"],
    githubRepo: "https://github.com/aissa-dev1/astro-evade",
    liveSite: "https://aissa-dev1-astro-evade.netlify.app",
  },
  {
    id: "6",
    img: "/projects/tic-tac-toe.png",
    title: "Tic Tac Toe - Make It Real",
    description:
      "Can you win in a table of 3 rows? Okay what about 4! let the complexity begin.",
    type: "front",
    skills: ["html", "scss", "ts"],
    githubRepo: "https://github.com/aissa-dev1/tic-tac-toe",
    liveSite: "https://aissa-dev1-tic-tac-toe.netlify.app",
  },
  {
    id: "7",
    img: "/projects/memory-game.png",
    title: "Memory Game - Solid Game",
    description:
      "Do you have a strong memory to play this game? If yes join the maze.",
    type: "front",
    skills: ["solid", "ts"],
    githubRepo: "https://github.com/aissa-dev1/memory-game",
    liveSite: "https://aissa-dev1-memory-game.netlify.app",
  },
  {
    id: "8",
    img: "/projects/mood-calendar.png",
    title: "Mood Calendar - Save Your Mood",
    description:
      "Express your mood with emojis by attaching the mood to its day, feel / apply.",
    type: "front",
    skills: ["html", "scss", "ts"],
    githubRepo: "https://github.com/aissa-dev1/mood-calendar",
    liveSite: "https://aissa-dev1-mood-calendar.netlify.app",
  },
];

export const clients: ClientType[] = [
  {
    id: "1",
    fullName: "Akram Ouaked",
    message:
      "Literally an artist. Every new feature he adds, he gets creative with it.",
  },
  { id: "2", fullName: "Alia", message: "Aissa Bedr is a master of his work." },
];

export const clientsProjects: ClientProjectType[] = [
  {
    id: "1",
    img: "/projects/digital-success.png",
    title: "Digital Success - Send Your Company to A Great Success",
    type: "full",
    skills: ["solid", "ts", "tailwindcss", "nodejs", "expressjs"],
    liveSite: "https://digital-success.netlify.app",
  },
  {
    id: "2",
    img: "/projects/pea-app.png",
    title: "PEA App - An English Learning Platform",
    type: "full",
    skills: ["reactjs", "ts", "tailwindcss", "zustand", "nestjs"],
    liveSite: "https://pea-app.netlify.app",
  },
];
