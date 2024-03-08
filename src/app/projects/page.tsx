import React from "react";
import ProjectCarousel from "./components/project-carousel";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div id="projects" className="flex flex-col gap-10 lg:gap-20 min-h-[100vh] py-10">
      <div className="flex flex-col gap-4 text-center">
        <p className=" text-3xl lg:text-6xl font-semibold">
          Recent <span className=" text-orange">Projects</span>
        </p>
        <p></p>
      </div>
      <div className="flex items-center justify-center max-w-[100vw]">
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default Projects;
