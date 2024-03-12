import React from "react";
import { projectData } from "../ui/data/project-data";

const ProjectCarousel = () => {
  return (
    <div className=" max-w-[100vw]">
      <div className="carousel carousel-center max-w-[100vw] py-20 pl-80 pr-10 space-x-40 bg-white ">
        {
          projectData.map((item, i)=>(
            <div key={i} id={item.id} className="carousel-item flex gap-5 text-center flex-col">
              <p className=" text-3xl text-black font-semibold">{item.name}</p>
              <div>{item.img}</div>
              <p className=" text-black text-lg font-medium">{item.body}</p>
        </div>
          ))
        }
      </div>
      <div className="flex justify-center w-full py-6 gap-5">
        <a
          href="#slide1"
          className="btn btn-xs bg-orange border-orange w-3 h-3 rounded-full"
        ></a>
        <a
          href="#slide2"
          className="btn btn-xs  bg-orange border-orange w-3 h-3 rounded-ful"
        ></a>
        <a
          href="#slide3"
          className="btn btn-xs  bg-orange border-orange w-3 h-3 rounded-ful"
        ></a>
        <a
          href="#slide4"
          className="btn btn-xs  bg-orange border-orange w-3 h-3 rounded-ful"
        ></a>
        <a
          href="#slide5"
          className="btn btn-xs bg-orange border-orange w-3 h-3 rounded-full"
        ></a>
        <a
          href="#slide6"
          className="btn btn-xs  bg-orange border-orange w-3 h-3 rounded-ful"
        ></a>
        <a
          href="#slide7"
          className="btn btn-xs  bg-orange border-orange w-3 h-3 rounded-ful"
        ></a>
      </div>
    </div>
  );
};

export default ProjectCarousel;
