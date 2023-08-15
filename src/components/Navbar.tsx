export const Navbar = () => {
  return (
    <>
      <nav className="w-screen font-semibold fixed top-0 backdrop-filter backdrop-blur-[15px]">
        <ul className="flex justify-center gap-4">
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
          <a href="https://wa.me/543364305962" target="_blank">
            <li className="flex w-[80px] justify-center p-4 md:w-[90px]">
              Contact
            </li>
          </a>
        </ul>
      </nav>
    </>
  );
};
