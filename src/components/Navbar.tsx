import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";
import { NAVBAR_ITEMS } from "../constants/navbar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
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
                {NAVBAR_ITEMS.map((item, index) => (
                  <a
                    onClick={handleClick}
                    href={`#${item.toLocaleLowerCase()}`}
                    key={index}
                  >
                    <li>{item}</li>
                  </a>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <ul className="hidden md:flex justify-center gap-4">
          {NAVBAR_ITEMS.map((item, index) => (
            <a href={`#${item.toLowerCase()}`} key={index}>
              <li className=" hover:border-b-2 hover:border-b-black flex w-[80px] justify-center p-4 md:w-[90px]">
                {item}
              </li>
            </a>
          ))}
        </ul>
      </nav>
    </>
  );
};
