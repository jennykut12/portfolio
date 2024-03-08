import React from "react";
import ClientsCarousel from "./components/clients-carousel";

type Props = {};

const Clients = (props: Props) => {
  return (
    <div id="clients" className="flex flex-col items-center text-center gap-10 lg:gap-20 min-h-[100vh] py-10 lg:py-20">
      <div>
        <p className=" text-3xl lg:text-6xl font-semibold">
          Clients always get <span className=" text-orange">Exceptional</span>{" "}
          Workfrom me...
        </p>
      </div>
      <ClientsCarousel />
    </div>
  );
};

export default Clients;
