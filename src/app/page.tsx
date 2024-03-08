import Image from "next/image";
import Intro from "./intro/page";
import Services from "./services/page";
import Works from "./work/page";
import Projects from "./projects/page";
import Clients from "./clients/page";
import FormContact from "./form-contact/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <main className="flex flex-col m-auto items-center justify-between ">
      <Intro />
      <Services />
      <Works />
      <Projects />
      <Clients />
      <FormContact/>
      <Footer/>
    </main>
  );
}
