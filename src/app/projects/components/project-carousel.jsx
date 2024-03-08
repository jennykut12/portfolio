import React from "react";

const ProjectCarousel = () => {
  return (
    <div className=" max-w-[100vw]">
      <div className="carousel carousel-center max-w-[70vw] py-20 px-10 space-x-10 bg-lightgreen rounded-box">
        <div id="slide1" className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            className="rounded-box"
          />
        </div>
        <div id="slide2" className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            className="rounded-box"
          />
        </div>
        <div id="slide3" className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            className="rounded-box"
          />
        </div>
        <div id="slide4" className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            className="rounded-box"
          />
        </div>
        <div id="slide5" className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            className="rounded-box"
          />
        </div>
        <div id="slide6" className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            className="rounded-box"
          />
        </div>
        <div id="slide7" className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            className="rounded-box"
          />
        </div>
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
