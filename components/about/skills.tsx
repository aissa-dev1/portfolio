import Skill, { SkillType } from "./skill";

interface Props {
  list: SkillType[];
}

export default function Skills({ list }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4 xl:gap-5">
      {list.map((skill) => (
        <Skill key={skill.id} {...skill} />
      ))}
    </div>
  );
}
