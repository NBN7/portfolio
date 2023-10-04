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
  const logoSize = "110px";

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      className="grid grid-cols-3 max-w-[20rem] md:max-w-[60rem] md:grid-cols-3 gap-4"
    >
      <BiLogoHtml5 style={{ cursor: "pointer" }} size={logoSize} />
      <BiLogoCss3 style={{ cursor: "pointer" }} size={logoSize} />
      <BiLogoJavascript style={{ cursor: "pointer" }} size={logoSize} />
      <BiLogoReact style={{ cursor: "pointer" }} size={logoSize} />
      <BiLogoTypescript style={{ cursor: "pointer" }} size={logoSize} />
      <BiLogoTailwindCss style={{ cursor: "pointer" }} size={logoSize} />
      <RiSupabaseFill style={{ cursor: "pointer" }} size={logoSize} />
      <BiLogoGithub style={{ cursor: "pointer" }} size={logoSize} />
      <BiLogoGit style={{ cursor: "pointer" }} size={logoSize} />
    </div>
  );
};
