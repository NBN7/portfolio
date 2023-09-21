import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="z-50 flex md:items-center md:justify-center w-screen p-6 fixed top-0 backdrop-filter backdrop-blur-[15px]">
        {!isOpen && (
          <div className="md:hidden">
            <MdMenu
              onClick={handleClick}
              size="30px"
              style={{ cursor: "pointer" }}
            />
          </div>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed top-0 py-6 bg-white w-full h-screen bg-inherit"
            >
              <MdClose
                onClick={handleClick}
                size="30px"
                style={{ cursor: "pointer" }}
              />
              <ul className="flex flex-col text-xl gap-6 mt-10">
                <a onClick={handleClick} href="#home">
                  <li>Home</li>
                </a>
                <a onClick={handleClick} href="#skills">
                  <li>Skills</li>
                </a>
                <a onClick={handleClick} href="#projects">
                  <li>Projects</li>
                </a>
                <a onClick={handleClick} href="#contact">
                  <li>Contact</li>
                </a>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <ul className="hidden md:flex justify-center gap-4">
          <a href="#home">
            <li className="flex w-[80px] justify-center p-4 md:w-[90px]">
              Home
            </li>
          </a>
          <a href="#skills">
            <li className="flex w-[80px] justify-center p-4 md:w-[90px]">
              Skills
            </li>
          </a>
          <a href="#projects">
            <li className="flex w-[80px] justify-center p-4 md:w-[90px]">
              Projects
            </li>
          </a>
          <a href="#contact">
            <li className="flex w-[80px] justify-center p-4 md:w-[90px]">
              Contact
            </li>
          </a>
        </ul>
      </nav>
    </>
  );
};
