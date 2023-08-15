import { Navbar } from "./components/Navbar";
import { Section } from "./components/Section";
import { Button } from "./components/Button";

import CV from "./assets/cv_BIRAN IGNACIO.pdf";

const App = () => {
  return (
    <>
      <Navbar />
      <Section sectionStyle="flex flex-col items-center justify-center">
        <>
          <div className="flex flex-col items-center mb-6">
            <p className="text-xl">Hello! I'm</p>
            <h2 className="text-7xl font-bold text-center mb-5">
              Ignacio Biran
            </h2>
            <p className="text-xl">Frontend Developer</p>
          </div>
          <div>
            <Button buttonText="Resume" href={CV} />
          </div>
        </>
      </Section>

      <Section sectionStyle="flex flex-col items-center">
          <h2 className="p-1 text-2xl font-bold border-black border-b-4">Projects</h2>
          
      </Section>
    </>
  );
};

export default App;
