import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";

export const Skills = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      className="grid grid-cols-3 max-w-[20rem] md:max-w-[60rem] md:grid-cols-3 gap-4"
    >
      <BiLogoHtml5 style={{ cursor: "pointer" }} size="110px" />
      <BiLogoCss3 style={{ cursor: "pointer" }} size="110px" />
      <BiLogoJavascript style={{ cursor: "pointer" }} size="110px" />
      <BiLogoReact style={{ cursor: "pointer" }} size="110px" />
      <BiLogoTypescript style={{ cursor: "pointer" }} size="110px" />
      <BiLogoTailwindCss style={{ cursor: "pointer" }} size="110px" />
      <RiSupabaseFill style={{ cursor: "pointer" }} size="110px" />
      <BiLogoGithub style={{ cursor: "pointer" }} size="110px" />
      <BiLogoGit style={{ cursor: "pointer" }} size="110px" />
    </div>
  );
};
