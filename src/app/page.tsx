import Image from "next/image";
import Navbar from "./components/navbar";
import Container from "./components/container";

export default function Home() {
  return (
    <>
       
        <div
      className=" bg-slate-50 dark:bg-slate-950 w-full lg:h-screen lg:overflow-auto overflow-hidden
     "
    >
      <div className="lg:w-[1090px] w-[425px] flex justify-center flex-col  mx-auto bg-slate-50  dark:bg-slate-950">
        <Navbar />
        <Container />
        
      </div>
    </div>
    </>
  );
}
