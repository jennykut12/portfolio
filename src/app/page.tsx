import Image from "next/image";
import Intro from "./intro/page";
import Services from "./services/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-5">
      <Intro/>
      <Services/>
    </main>
  );
}
