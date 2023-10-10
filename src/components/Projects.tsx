import { Button } from "./Button";
import { PROJECTS } from "../constants/projects";

export const Projects = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1500"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2"
    >
      {PROJECTS.map((project) => {
        return (
          <div
            className="flex flex-col border-2 rounded-xl"
            key={project.title}
          >
            <div className="flex md:w-[300px] md:h-[200px] w-[300px] h-[300px]">
              <img
                className="object-cover rounded-t-xl"
                src={project.img}
                alt={project.title}
              />
            </div>
            <Button
              buttonText="Github"
              buttonStyle="w-full bg-[#242424] text-white hover:bg-[#303030] hover:transition-all hover:duration-300 p-4 rounded-b-xl"
              href={project.github}
            />
          </div>
        );
      })}
    </div>
  );
};
