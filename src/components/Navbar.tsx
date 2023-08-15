export const Navbar = () => {
  return (
    <>
      <nav className="w-full font-semibold fixed top-0 backdrop-filter backdrop-blur-[15px]">
        <ul className="flex justify-center gap-4">
          <a href="#">
            <li className="flex w-[80px] justify-center p-4 md:w-[90px]">
              Home
            </li>
          </a>
          <a href="#">
            <li className="flex w-[80px] justify-center p-4 md:w-[90px]">
              Projects
            </li>
          </a>
          <a href="#">
            <li className="flex w-[80px] justify-center p-4 md:w-[90px]">
              Skills
            </li>
          </a>
          <a href="#">
            <li className="flex w-[80px] justify-center p-4 md:w-[90px]">
              Contact
            </li>
          </a>
        </ul>
      </nav>
    </>
  );
};
