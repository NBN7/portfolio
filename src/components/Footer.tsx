import { BsLinkedin, BsGithub } from "react-icons/bs";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col justify-center items-center border-t-2 text-[#11181C] h-[150px] gap-6">
      <h2>©{year} Ignacio Biran All rights reserved</h2>
      <div className="flex gap-4">
        <a
          className="hover:text-blue-600 hover:transition-all hover:duration-300"
          href="https://ar.linkedin.com/in/ignacio-biran-893113257"
          target="_blank"
        >
          <BsLinkedin size="20px" />
        </a>
        <a
          className="hover:text-gray-600 hover:transition-all hover:duration-300"
          href="https://github.com/NBN7/"
          target="_blank"
        >
          <BsGithub size="20px" />
        </a>
      </div>
    </footer>
  );
};
