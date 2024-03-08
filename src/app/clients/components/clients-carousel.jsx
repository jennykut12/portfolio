import Image from "next/image";
import React from "react";
import img from "../../../../public/jenniferimgbg.png";

const ClientsCarousel = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="carousel  w-[70vw] min-h-[20vh] lg:min-h-[40vh] bg-lightgreen shadow-lg rounded-2xl">
        <div
          id="item1"
          className="carousel-item flex flex-col py-10 gap-5 items-center w-full"
        >
          <div className="w-40 h-40 rounded-full bg-blueCard ">
            <Image
              width={400}
              height={400}
              src={img}
              className="w-40 h-40 rounded-full"
            />
          </div>
          <div>
            <p className=" text-xl font-semibold">Jennifer David</p>
          </div>
          <div className=" px-10 lg:px-28">
            <p className=" font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div
          id="item2"
          className="carousel-item flex flex-col py-10 gap-5 items-center w-full"
        >
          <div className="w-40 h-40 rounded-full bg-blueCard ">
            <Image
              width={400}
              height={400}
              src={img}
              className="w-40 h-40 rounded-full"
            />
          </div>
          <div>
            <p className=" text-xl font-semibold">Jennifer David</p>
          </div>
          <div className=" px-10 lg:px-28">
            <p className=" font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div
          id="item3"
          className="carousel-item flex flex-col py-10 gap-5 items-center w-full"
        >
          <div className="w-40 h-40 rounded-full bg-blueCard ">
            <Image
              width={400}
              height={400}
              src={img}
              className="w-40 h-40 rounded-full"
            />
          </div>
          <div>
            <p className=" text-xl font-semibold">Jennifer David</p>
          </div>
          <div className=" px-10 lg:px-28">
            <p className=" font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div
          id="item4"
          className="carousel-item flex flex-col py-10 gap-5 items-center w-full"
        >
          <div className="w-40 h-40 rounded-full bg-blueCard ">
            <Image
              width={400}
              height={400}
              src={img}
              className="w-40 h-40 rounded-full"
            />
          </div>
          <div>
            <p className=" text-xl font-semibold">Jennifer David</p>
          </div>
          <div className="px-10 lg:px-28">
            <p className=" font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-6 gap-5">
        <a
          href="#item1"
          className="btn btn-xs bg-orange border-orange w-3 h-3 rounded-full"
        ></a>
        <a
          href="#item2"
          className="btn btn-xs  bg-orange border-orange w-3 h-3 rounded-ful"
        ></a>
        <a
          href="#item3"
          className="btn btn-xs  bg-orange border-orange w-3 h-3 rounded-ful"
        ></a>
        <a
          href="#item4"
          className="btn btn-xs  bg-orange border-orange w-3 h-3 rounded-ful"
        ></a>
      </div>
    </div>
  );
};

export default ClientsCarousel;
