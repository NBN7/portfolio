import type { Skill } from "../types/skills";

import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiNextui } from "react-icons/si";
import { SiPrisma } from "react-icons/si";

const style = { cursor: "pointer" };
const size = "110px";

export const SKILLS:Skill[] = [
  { text: "HTML", icon: <BiLogoHtml5 style={style} size={size} /> },
  { text: "CSS", icon: <BiLogoCss3 style={style} size={size} /> },
  { text: "JavaScript", icon: <BiLogoJavascript style={style} size={size} /> },
  { text: "React", icon: <BiLogoReact style={style} size={size} /> },
  { text: "TypeScript", icon: <BiLogoTypescript style={style} size={size} /> },
  { text: "Tailwind CSS", icon: <BiLogoTailwindCss style={style} size={size} /> },
  { text: "Supabase", icon: <RiSupabaseFill style={style} size={size} /> },
  { text: "GitHub", icon: <BiLogoGithub style={style} size={size} /> },
  { text: "Git", icon: <BiLogoGit style={style} size={size} /> },
  { text: "Next JS", icon: <SiNextdotjs style={style} size={size} /> },
  { text: "Next UI", icon: <SiNextui style={style} size={size} /> },
  { text: "Prisma", icon: <SiPrisma style={style} size={size} /> },
];
