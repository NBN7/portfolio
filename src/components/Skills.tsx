import { SKILLS } from "../constants/skills";

export const Skills = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      className="grid grid-cols-3 max-w-[25rem] md:max-w-[60rem] md:grid-cols-3 gap-4 place-items-center"
    >
      {SKILLS.map((skill, index) => (
        <abbr title={skill.text} key={index}>
          {skill.icon}
        </abbr>
      ))}
    </div>
  );
};
