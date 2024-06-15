import Image from "next/image";
import { Badge } from "../ui/badge";

export type SkillType = {
  id: string;
  icon: string;
  body: string;
};

interface Props extends SkillType {}

export default function Skill({ id, icon, body }: Props) {
  return (
    <Badge
      className="flex items-center justify-center lg:justify-start gap-2 py-2"
      variant="outline"
    >
      {icon && <Image src={icon} alt={body} width={25} height={25} />}
      <p>{body}</p>
    </Badge>
  );
}
