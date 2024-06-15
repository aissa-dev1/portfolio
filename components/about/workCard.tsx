import Image from "next/image";
import { Card, CardTitle } from "../ui/card";

export default function WorkCard() {
  return (
    <Card className="p-6">
      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2">
        <Image
          src="/about/heart-hand.svg"
          alt="heart-hand"
          width={75}
          height={75}
        />
        <CardTitle className="text-center lg:text-start">
          Building projects with love and passion.
        </CardTitle>
      </div>
    </Card>
  );
}
