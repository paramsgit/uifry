"use client"
import { useEffect, useState } from "react";

// import { LiaToggleOffSolid } from "react-icons/lia";
// import { LiaToggleOnSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [active, setActive] = useState(1);
  const [show, setShow] = useState(false);
//   { theme, setTheme }
//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

  return (
    <nav className=" flex lg:flex-row   flex-col  lg:w-[1090px] lg:h-[60px] lg:justify-between lg:items-center my-5  mt-8 lg:px-0 px-8 w-[425px]">
      <div className=" flex lg:flex-row flex-col  gap-10">
        <div className=" flex  justify-center lg:justify-normal gap-20 lg:gap-0 items-center">
          <img
            className=" lg:min-w-[117px] lg:min-h-[35px] max-w-[160px] max-h-[65px] dark:bg-primary-white  rounded-md  p-2"
            src={`/Logo.png`}
            alt=""
          />
          {!show ? (
            <GiHamburgerMenu
              onClick={() => setShow(true)}
              className=" dark:text-primary-white lg:hidden a mt-1 text-2xl cursor-pointer"
            />
          ) : (
            <RxCross2
              onClick={() => setShow(false)}
              className="a dark:text-primary-white lg:hidden mt-1 text-2xl cursor-pointer"
            />
          )}
        </div>
        <div
          className={`  ${
            !show ? "hidden lg:flex" : ""
          } flex flex-col  lg:flex-row  font-bold  w-full justify-evenly gap-5 text-lg text-[20px]`}
        >
          <button
            onClick={() => setActive(1)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 1
                ? "font-[ClashDisplay-Bold] text-primary-red"
                : " dark:text-primary-white"
            } `}
          >
            Home
          </button>
          <button
            onClick={() => setActive(2)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 2
                ? "font-[ClashDisplay-Bold] text-primary-red"
                : " dark:text-primary-white"
            } `}
          >
            About Us
          </button>
          <button
            onClick={() => setActive(3)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 3
                ? "font-[ClashDisplay-Bold] text-primary-red"
                : "dark:text-primary-white"
            } `}
          >
            Pricing
          </button>
          <button
            onClick={() => setActive(4)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 4
                ? "font-[ClashDisplay-Bold] text-primary-red"
                : "dark:text-primary-white"
            } `}
          >
            Features
          </button>
        </div>
      </div>
      <div
        className={` ${
          !show ? "hidden lg:flex" : ""
        } flex lg:gap-16 gap-8  lg:mx-0 mx-16  lg:flex-row flex-col items-center lg:mt-0 mt-8 lg:justify-normal justify-between`}
      >
        {/* <button className=" text-4xl  hover:cursor-pointer dark:text-primary-white">
          {theme === "light" && (
            <LiaToggleOffSolid
              onClick={() => {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
            />
          )}
          {theme === "dark" && (
            <LiaToggleOnSolid
              onClick={() => {
                setTheme("light");
                localStorage.setItem("theme", "light");
              }}
            />
          )}
        </button> */}
        <div className=" w-[180px] h-[60px]  rounded-md flex items-center bg-primary-black text-primary-white dark:text-primary-black dark:bg-primary-white justify-center text-[18px]  font-[ClashDisplay-Medium] hover:bg-primary-red dark:hover:bg-primary-red ease-linear transition-all cursor-pointer ">
          <button>Download</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;