import { ExperienceCardData } from "@/components/experience/experienceCard";

export const experienceDataYears = ["2022", "2023", "2024", "2025"] as const;

export type ExperienceYear = (typeof experienceDataYears)[number];

export const experienceData2022: ExperienceCardData = {
  year: "2022",
  highlights: [
    "The great journey started here.",
    "Building basic structures with HTML and CSS.",
    "Overcoming initial hurdles with JavaScript.",
    "Diving deep into Front End Web Development.",
    "First taste of React.js, and it was amazing!",
    "Fell in love with technology and TypeScript.",
  ],
};

export const experienceData2023: ExperienceCardData = {
  year: "2023",
  highlights: [
    "Carrying on the journey from 2022.",
    "Continued growth in Front End Web Development.",
    "Started learning Back End Web Development.",
    "Struggled with Back End concepts but pushed through.",
    "Created personal projects with Next.js.",
    "Revisited Back End with renewed determination.",
    "Achieved significant progress with Node.js and Express.",
  ],
};

export const experienceData2024: ExperienceCardData = {
  year: "2024",
  highlights: [
    "The year of mastering the Back End.",
    "Achieved Full Stack Web Developer status.",
    "Continued excellence in Front End Development with Solid.js.",
    "API creation marathon with Node.js and Express.js.",
    "Integrated new Back End concepts with Front End.",
    "Built Full Stack projects with Next.js and NestJS.",
    "Created 2D games with HTML Canvas and TypeScript.",
    "Explored the new frontier of Deno Land.",
    "Fell in love with NestJS all over again.",
  ],
};

export const experienceData2025: ExperienceCardData = {
  year: "2025",
  highlights: ["Started this year with new projects."],
};

export const experienceData: Record<ExperienceYear, ExperienceCardData> = {
  "2022": experienceData2022,
  "2023": experienceData2023,
  "2024": experienceData2024,
  "2025": experienceData2025,
};
