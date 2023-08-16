import { Button } from "./Button";
import CV from "../assets/cv_BIRAN IGNACIO.pdf";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-6">
        <p data-aos="fade-left" data-aos-duration="1500" className="text-xl">
          Hello! I'm
        </p>
        <h2
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-7xl font-bold text-center mb-5"
        >
          Ignacio Biran
        </h2>
        <p data-aos="fade-left" data-aos-duration="1500" className="text-xl">
          Frontend Developer
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <Button buttonStyle="hover:bg-black" buttonText="Resume" href={CV} />
      </div>
    </>
  );
};
