import Image from "next/image";
import { Card, CardTitle } from "../ui/card";

export default function TimeCard() {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2">
        <Image src="/about/time.svg" alt="time" width={75} height={75} />
        <CardTitle className="text-center lg:text-start">
          Committed to deadlines and maintain expectations.
        </CardTitle>
      </div>
    </Card>
  );
}
