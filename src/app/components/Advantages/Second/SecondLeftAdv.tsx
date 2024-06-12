"use client";

import { useEffect, useRef ,useState} from "react";
import { gsap } from "gsap";
import Cards from 'react-credit-cards-2';
import './card.css'

type FocusType = "name" | "number" | "expiry" | "cvc" | "";
interface CardState {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus: FocusType;
}
interface SecondLeftAdvProps {
  state: CardState;
  // setState: React.Dispatch<React.SetStateAction<CardState>>;
}
const SecondLeftAdv: React.FC<SecondLeftAdvProps> = ({state}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]|HTMLDivElement[]>([]);
 const {number,expiry,cvc,name,focus}=state;
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

    // Observe each image element
    imagesRef.current.forEach((img) => {
      if (img) {
        observer.observe(img);
      }
    });

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, []);



  return (
    <>
      <div
        className="lg:w-[40%] w-[425px] lg:mt-0 mt-16"
        ref={containerRef}
      >
        <img
          className="a absolute lg:-top-[40px] lg:scale-100 scale-75 top-60 lg:-left-0 -left-10"
          src={`/assets/coloradvsec.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[0] = el;
          }}
        />

        <img
          className="lg:-top-[200px] lg:left-[450px] absolute lg:-bottom-0 -bottom-20"
          src={`/assets/star48.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[1] = el;
          }}
        />
        <img
          className="absolute lg:-top-[210px] lg:-left-[150px] w-[425px] lg:w-auto"
          src={`/assets/adv2.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[2] = el;
          }}
        />
        {/* <img
          className="absolute lg:left-[110px] lg:top-4 lg:scale-100 scale-[60%] lg:-bottom-0 -bottom-[255px] left-[100px]"
          src={`/assets/advs2.png`}
          alt=""
         
        /> */}
        <div  ref={(el) => {
            if (el) imagesRef.current[3] = el;
          }}>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
       </div> 
      </div>
    </>
  );
};

export default SecondLeftAdv;
