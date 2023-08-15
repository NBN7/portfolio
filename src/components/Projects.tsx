import { projectsList } from "../utils/projects";
import { Button } from "./Button";

export const Projects = () => {
  return (
    <>
      <div data-aos="fade-left" data-aos-duration="1500" className="grid md:grid-cols-3 max-w-[40rem] md:max-w-[60rem] gap-4">
        {projectsList.map((project) => {
          return (
            <div className="box-shadow rounded-lg" key={project.title}>
              <img
                className="rounded-t-lg"
                src={project.img}
                alt="project-img"
              />
              <div className="flex flex-col bg-black text-white p-4 rounded-b-lg gap-4">
                <h2>{project.title}</h2>
                <div className="flex justify-around gap-2">
                  <Button
                    buttonStyle="w-full hover:bg-[#3b3b3b]"
                    buttonText="Github"
                    href={project.github}
                  />
                  <Button
                    buttonStyle="w-full hover:bg-[#3b3b3b]"
                    buttonText="Demo"
                    href={project.url}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
