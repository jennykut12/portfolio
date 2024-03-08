import React from "react";
import Resume from "../../../public/service/resume.docx";
import Cards from "./components/cards";
import Humble from "../../../public/humble.png";
import Glasses from "../../../public/glasses.png";
import HeartEmoji from "../../../public/heartemoji.png";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="flex flex-col -mt-20 px-10 gap-10 lg:flex-row w-full min-h-[100vh]">
      <div className=" flex flex-col  gap-10 items-center text-center ">
        <div>
        <p className=" text-6xl font-semibold">My Awesome</p>
        <p className=" text-6xl font-semibold text-orange">services</p>
        </div>
        <a href={Resume} download>
          <button className="btn button rounded-2xl lg:text-lg font-bold bg-orange border-orange text-white px-12 ">
          Download CV
          </button>
        </a>
      </div>
      <div className=" flex flex-col gap-10 lg:flex-row items-center lg:m-auto lg:pr-60">
        <div className="lg:relative flex gap-5 lg:-mt-[40vh] lg:mr-96 cursor-pointer ">
          <Cards
            emoji={Humble}
            heading={"Software Developer"}
            details={"React.js, React native, Nextjs, Tailwind, Redux, Typescript, Trello"}
          />
        </div>
        <div className="lg:relative lg:-mt-[80vh]  cursor-pointer">
          <Cards emoji={Glasses} heading={'Cloud Infastructure'} details={'Azure, AWS'}/>
        </div>
        <div className="lg:relative lg:mt-[10vh] lg:mr-48 cursor-pointer">
          <Cards emoji={Humble} heading={'UI'} details={'Figma, Sketch, Photoshop, Canva'}/>
        </div>
      </div>
    </div>
  );
};

export default Services;
