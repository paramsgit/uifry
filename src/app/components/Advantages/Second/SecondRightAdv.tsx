"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
type FocusType = "name" | "number" | "expiry" | "cvc" | "";
interface CardState {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus: FocusType;
}
interface SecondRightAdvProps {
  state: CardState;
  setState: React.Dispatch<React.SetStateAction<CardState>>;
}
const SecondRightAdv: React.FC<SecondRightAdvProps> = ({state,setState}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate using GSAP when the element comes into view
            gsap.fromTo(
              entry.target,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );
            observer.unobserve(entry.target); // Unobserve after animating
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.2, // Trigger when 20% of the element is in view
      }
    );

    // Observe each element
    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (evt:any) => {
    const { name, value } = evt.target;
    // console.log(evt.name)
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt:any) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }
  return (
    <>
      <div className="lg:w-[46%] w-[425px] lg:ml-28 lg:mt-6 lg:mx-0 mx-4" ref={containerRef}>
        <div className="mt-7" ref={(el) => {
          if (el) elementsRef.current[0] = el;
        }}>
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center lg:size-11 size-9 bg-primary-red rounded-full">
              <img src={`/assets/ninjaBlade.png`} alt="" />
            </div>
            <span className="font-[ClashDisplay-Semibold] lg:text-[28px] text-[24px] dark:text-primary-white">
              Fully Customizable
            </span>
          </div>
          <form className="mt-4 dark:bg-gray-800 bg-slate-100 p-4 rounded-lg shadow-md grid grid-cols-2 gap-4 max-w-sm">
    <div>
      <input
        type="number"
        name="number"
        placeholder="Card Number"
        value={state.number}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        className="w-full p-2  dark:bg-gray-700 dark:text-white text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
      />
    </div>
    <div>
      <input
        type="text"
        name="name"
        placeholder="Cardholder Name"
        value={state.name}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        className="w-full p-2  dark:bg-gray-700 dark:text-white text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
      />
    </div>
    <div>
      <input
        type="text"
        name="expiry"
        placeholder="Expiry (MM/YY)"
        value={state.expiry}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        className="w-full p-2  dark:bg-gray-700 dark:text-white text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
      />
    </div>
    <div>
      <input
        type="text"
        name="cvc"
        placeholder="CVC"
        value={state.cvc}
        max={10000}
        maxLength={10000}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        className="w-full p-2  dark:bg-gray-700 dark:text-white text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
  </form>
          <p className="font-[ClashDisplay-Medium] text-gray-500 capitalize mt-6 lg:w-auto w-[400px]" ref={(el) => {
            if (el) elementsRef.current[1] = el;
          }}>
            "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
            blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
            nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam."
          </p>
        </div>

       
      </div>
    </>
  );
};

export default SecondRightAdv;
