"use client"
import { useState } from "react";
import FirstLeftAdv from "./First/FirstLeftAdv";
import FirstRightAdv from "./First/FirstRightAdv";
import SecondLeftAdv from "./Second/SecondLeftAdv";
import SecondRightAdv from "./Second/SecondRightAdv";

type FocusType = "name" | "number" | "expiry" | "cvc" | "";
interface CardState {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus: FocusType;
}
export default function Advantages() {
  const [state, setState] = useState<CardState>({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });
  return (
    <div className=" mt-72">
    <div className=" flex relative  lg:flex-row flex-col lg:mb-0 ">
      <FirstLeftAdv />
      <FirstRightAdv />
    </div>
    <div className=" lg:mt-96 mt-[500px]">
      <div className=" flex relative lg:flex-row flex-col-reverse">
        <SecondLeftAdv state={state} />
        <SecondRightAdv state={state} setState={setState}/>
      </div>
    </div>
  </div>
  );
}
