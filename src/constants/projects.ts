import { Project } from "../types/project";

import forum from "../assets/forum.png";
import njl from "../assets/njl-music.png";
import weather from "../assets/weather.png";
import currency from "../assets/currency.png";
import password from "../assets/password-generator.png";
import translate from "../assets/translate.png";

export const PROJECTS: Project[] = [
  {
    title: "Password Generator",
    url: "https://labo4-passwordgenerator.netlify.app/",
    github: "https://github.com/NBN7/password-generator",
    img: password,
  },
  {
    title: "Translate",
    url: "https://nbn-translate.netlify.app/",
    github: "https://github.com/NBN7/translate",
    img: translate,
  },
  {
    title: "Forum",
    url: "https://nbn-forum.netlify.app/",
    github: "https://github.com/NBN7/foro",
    img: forum,
  },
  {
    title: "NJL Music",
    url: "https://njl-music.netlify.app/",
    github: "https://github.com/LaiChiaraluce/NJL-Music",
    img: njl,
  },
  {
    title: "Weather",
    url: "https://nbn-weather-app.netlify.app/",
    github: "https://github.com/NBN7/weather-app",
    img: weather,
  },
  {
    title: "Currency",
    url: "https://nbn-currency-converter.netlify.app/",
    github: "https://github.com/NBN7/currency-converter",
    img: currency,
  },
];
