"use client"

import Left from "./left";
import Right from "./right";

export default function Hero() {
  return (
    <div className="lg:w-[1090px] w-[425px] flex lg:flex-row flex-col justify-center lg:mt-8 ">
      <Left />
      <Right />
    </div>
  );
}