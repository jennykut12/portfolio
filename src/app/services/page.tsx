import React from "react";
import Resume from "../../../public/service/resume.docx";
import Cards from "./components/cards";
import Humble from "../../../public/humble.png";
import Glasses from "../../../public/glasses.png";
import HeartEmoji from "../../../public/heartemoji.png";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="flex">
      <div className="relative">
        <p>My Awesome</p>
        <p>services</p>
        <p>
          I am a Frontend Developer with high level of experience and
          <br /> development, developming Quality work for my clients
        </p>
        <a href={Resume} download>
          <button className="btn button rounded-2xl lg:text-lg font-bold bg-orange border-orange text-white px-12 lg:px-20">
            Learn More
          </button>
        </a>
      </div>
      <div className=" flex items-center">
        <div className="relative">
          <Cards
            emoji={Humble}
            heading={"Software Developer"}
            details={"React.js, React native, Nextjs, Tailwind, Redux, Typescript, Trello"}
          />
        </div>
        <div className="relative">
          <Cards emoji={Glasses} heading={'Cloud Infastructure'} details={'Azure, AWS'}/>
        </div>
      </div>
    </div>
  );
};

export default Services;
