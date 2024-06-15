import Image from "next/image";
import { Card } from "./ui/card";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pb-14 md:flex-row md:justify-between">
      <p className="font-bold">
        Copyright ©{new Date().getFullYear()} Aissa Bedr
      </p>
      <div className="flex items-center gap-4">
        <a href="https://www.instagram.com/_aissa_dev" target="_blank">
          <Card className="size-8 flex items-center justify-center rounded-md">
            <Image
              src="/social/instagram.svg"
              alt="instagram"
              width={20}
              height={20}
            />
          </Card>
        </a>
        <a href="https://github.com/aissa-dev1" target="_blank">
          <Card className="size-8 flex items-center justify-center rounded-md">
            <Image
              src="/social/github.svg"
              alt="github"
              width={20}
              height={20}
            />
          </Card>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61556188133945"
          target="_blank"
        >
          <Card className="size-8 flex items-center justify-center rounded-md">
            <Image
              src="/social/facebook.svg"
              alt="facebook"
              width={24}
              height={24}
            />
          </Card>
        </a>
      </div>
    </div>
  );
}
