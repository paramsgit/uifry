"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FirstRightAdv: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

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
          className="a absolute lg:right-[2px] lg:-top-[0px] lg:scale-125 scale-75"
          src={`/assets/coloradvfirst.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[0] = el;
          }}
        />
        <img
          className="a absolute lg:-right-[180px] lg:-top-[100px] lg:scale-100 scale-75"
          src={`/assets/star64.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[1] = el;
          }}
        />
        <img
          className="absolute lg:w-auto w-[425px] lg:-bottom-[260px]"
          src={`/assets/adv1.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[2] = el;
          }}
        />
        <img
          className="absolute lg:top-[115px] lg:scale-100 scale-[60%] -bottom-[290px] lg:-bottom-0 lg:left-[820px] left-[130px]"
          src={`/assets/advs1.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[3] = el;
          }}
        />
      </div>
    </>
  );
};

export default FirstRightAdv;
