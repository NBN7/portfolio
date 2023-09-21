import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Section } from "./components/Section";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { SECTIONS } from "./constants/sections";

const App = () => {
  return (
    <>
      <Navbar />
      <Section
        sectionId="home"
        sectionStyle="flex flex-col items-center justify-center"
      >
        <Home />
      </Section>

      {SECTIONS.map((section, index) => (
        <Section
          key={index}
          sectionId={section.toLowerCase()}
          sectionStyle="flex flex-col items-center justify-center"
        >
          <>
            <h2 className="p-1 text-2xl font-bold border-black border-b-3 mb-10">
              {section}
            </h2>
            {section === "Skills" && <Skills />}
            {section === "Projects" && <Projects />}
            {section === "Contact" && <Contact />}
          </>
        </Section>
      ))}

      <Footer />
    </>
  );
};

export default App;
