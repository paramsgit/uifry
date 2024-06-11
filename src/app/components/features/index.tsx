"use client"

import Left from "./left";
import Right from "./right";



export default function Features() {
  return (
    <>
        <div className=" relative w-full lg:mt-[36%] mt-[600px] flex lg:flex-row  flex-col-reverse lg:gap-0  lg:mb-0 mb-[350px] ">
      <Left />
      <Right />
    </div>
    </>
  );
}