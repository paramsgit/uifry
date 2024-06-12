"use client"
import { useEffect, useState } from "react";

import { LiaToggleOffSolid } from "react-icons/lia";
import { LiaToggleOnSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {
  const ISSERVER = typeof window === "undefined";
    const [theme, setTheme] = useState(
      ISSERVER?null: ( localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
      );
  const [active, setActive] = useState(1);
  const [show, setShow] = useState(false);
//   { theme, setTheme }
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className=" flex lg:flex-row   flex-col  lg:w-[1090px] lg:h-[60px] lg:justify-between lg:items-center my-5  mt-8 lg:px-0 px-8 w-[425px]">
      <div className=" flex lg:flex-row flex-col  gap-10">
        <div className=" flex  justify-center lg:justify-normal gap-20 lg:gap-0 items-center">
          <img
            className=" lg:min-w-[117px] lg:min-h-[35px] max-w-[160px] max-h-[65px] dark:hidden rounded-md  p-2"
            src={`/assets/Logo.png`}
            alt=""
          />
          <img
            className=" lg:min-w-[117px] lg:min-h-[35px] max-w-[160px] hidden dark:block max-h-[65px] rounded-md  p-2"
            src={`/assets/LogoDark.png`}
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
           <a href="#home"> Home</a>
          </button>
          <button
            onClick={() => setActive(2)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 2
                ? "font-[ClashDisplay-Bold] text-primary-red"
                : " dark:text-primary-white"
            } `}
          >
           <a href="#advantages">Advantages</a> 
          </button>
          <button
            onClick={() => setActive(3)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 3
                ? "font-[ClashDisplay-Bold] text-primary-red"
                : "dark:text-primary-white"
            } `}
          >
           <a href="#testimonial"> Testimonials</a>
          </button>
         
          <button
            onClick={() => setActive(4)}
            className={` hover:cursor-pointer hover:border-b-primary-red hover:border-b-2    ${
              active === 4
                ? "font-[ClashDisplay-Bold] text-primary-red"
                : "dark:text-primary-white"
            } `}
          >
              <a href="#features"> Features   </a>
          </button>
       
        </div>
      </div>
      <div
        className={` ${
          !show ? "hidden lg:flex" : ""
        } flex lg:gap-16 gap-8  lg:mx-0 mx-16  lg:flex-row flex-col items-center lg:mt-0 mt-8 lg:justify-normal justify-between`}
      >

        <button className=" text-4xl bg-gray-900 dark:bg-slate-200 p-3 rounded-md hover:cursor-pointer dark:text-primary-white transition-all duration-500 ease-in-out" onClick={() => {
                setTheme(theme==="light"?"dark":"light");
                localStorage.setItem("theme", theme==="light"?"dark":"light");
              }}>
          {theme ==="dark" ? (<svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-brightness-high text-yellow-600" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>):
(<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-moon-stars text-gray-100" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</svg>)
}
          {/* {theme === "light" && (
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
          )} */}
        </button>
        <div className=" w-[180px] h-[60px]  rounded-md flex items-center bg-primary-black text-primary-white dark:text-primary-black dark:bg-primary-white justify-center text-[18px]  font-[ClashDisplay-Medium] hover:bg-primary-red dark:hover:bg-primary-red ease-linear transition-all cursor-pointer ">
          <button>Download</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;