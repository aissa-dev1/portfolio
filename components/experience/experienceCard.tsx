import { Card, CardDescription, CardTitle } from "../ui/card";

export type ExperienceCardYear = "2022" | "2023" | "2024";

export interface ExperienceCardData {
  year: string;
  highlights: string[];
}

interface ExperienceCardProps extends ExperienceCardData {}

export default function ExperienceCard({
  year,
  highlights,
}: ExperienceCardProps) {
  return (
    <Card className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center">
      <CardTitle className="text-2xl shrink-0">{year}</CardTitle>
      <div className="flex flex-col gap-1">
        {highlights.map((desc, index) => (
          <CardDescription key={index} className="flex items-center gap-1">
            {desc}
          </CardDescription>
        ))}
      </div>
    </Card>
  );
}
