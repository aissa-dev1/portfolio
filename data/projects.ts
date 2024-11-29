import { ProjectType } from "@/components/projects/projectCard";
import { random } from "@/utils/random";

export const projects: ProjectType[] = [
  {
    id: random.strongId(),
    img: "/projects/poll-next.png",
    title: "Poll Next - Full Stack Polls Web Application",
    description:
      "Create your Poll Next account, create your own polls, share them with friends and wait their reaction and have fun.",
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
    id: random.strongId(),
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
    id: random.strongId(),
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
    id: random.strongId(),
    img: "/projects/next-dashboard.png",
    title: "Next Dashboard - Explore",
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
    id: random.strongId(),
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
    id: random.strongId(),
    img: "/projects/budget-app.png",
    title: "Budget App - Start here",
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
    githubRepo: "https://github.com/aissa-dev1/budget-app",
    liveSite: "https://aissa-dev1-budget-app.netlify.app",
  },
  {
    id: random.strongId(),
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
    id: random.strongId(),
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
