import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Section } from "./components/Section";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

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

      <Section
        sectionId="skills"
        sectionStyle="flex flex-col items-center justify-center"
      >
        <>
          <h2 className="p-1 text-2xl font-bold border-black border-b-4 mb-10">
            Skills
          </h2>
          <Skills />
        </>
      </Section>

      <Section
        sectionId="projects"
        sectionStyle="flex flex-col items-center justify-center"
      >
        <>
          <h2 className="p-1 text-2xl font-bold border-black border-b-4 mb-10">
            Projects
          </h2>
          <Projects />
        </>
      </Section>

      <Section
        sectionId="contact"
        sectionStyle="flex flex-col items-center justify-center"
      >
        <>
          <h2 className="p-1 text-2xl font-bold border-black border-b-4 mb-10">
            Contact
          </h2>
          <Contact />
        </>
      </Section>

      <Footer />
    </>
  );
};

export default App;
