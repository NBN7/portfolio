import { BsLinkedin, BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="box-shadow flex flex-col justify-center items-center  bg-black text-white h-20 gap-2">
      <h2>©2023 Ignacio Biran All rights reserved</h2>
      <div className="flex gap-4">
        <a
          className="hover:text-blue-600 hover:transition-all hover:duration-300"
          href="https://ar.linkedin.com/in/ignacio-biran-893113257"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="hover:text-gray-600 hover:transition-all hover:duration-300"
          href="https://github.com/NBN7/"
          target="_blank"
        >
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};
