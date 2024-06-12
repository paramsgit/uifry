"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Right: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement[]>([]);

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

    // Observe each feature element
    featuresRef.current.forEach((feature) => {
      if (feature) {
        observer.observe(feature);
      }
    });

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-32 lg:mx-0 mx-4 lg:w-[48%] w-[425px] relative"
    >
      <img
        className="absolute lg:-right-[40%] right-5"
        src={`/assets/colorfeaturesright.png`}
        alt=""
      />
      <h1 className="uppercase lg:text-[18px] font-[ClashDisplay-Medium] tracking-widest text-primary-red">
        Features
      </h1>
      <h1 className="dark:text-primary-white font-[ClashDisplay-Bold] lg:text-[48px] text-[44px]">
        Uifry Premium
      </h1>
      <div className="mt-7 relative">
        <h1
          className="flex text-lg font-[ClashDisplay-Semibold] gap-3 items-center dark:text-primary-white"
          ref={(el) => {
            if (el) featuresRef.current[0] = el;
          }}
        >
          <img className="size-5" src={`/assets/features1.png`} alt="" />
          <span className="tracking-wide font-[ClashDisplay-Semibold] capitalize">
            Budgeting Intervals
          </span>
        </h1>
        <p
          className="text-gray-500 font-[ClashDisplay-Medium] capitalize mt-3"
          ref={(el) => {
            if (el) featuresRef.current[1] = el;
          }}
        >
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
      <div className="mt-8 relative">
        <h1
          className="flex text-lg font-[ClashDisplay-Semibold] tracking-wide gap-3 items-center dark:text-primary-white"
          ref={(el) => {
            if (el) featuresRef.current[2] = el;
          }}
        >
          <img className="size-5" src={`/assets/features2.png`} alt="" />
          <span className="font-[ClashDisplay-Semibold] tracking-wide capitalize">
            Budgeting Intervals
          </span>
        </h1>
        <p
          className="text-gray-500 capitalize font-[ClashDisplay-Medium] mt-3"
          ref={(el) => {
            if (el) featuresRef.current[3] = el;
          }}
        >
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
      <div className="mt-8">
        <h1
          className="flex text-lg font-[ClashDisplay-Semibold] gap-3 items-center dark:text-primary-white"
          ref={(el) => {
            if (el) featuresRef.current[4] = el;
          }}
        >
          <img className="size-5" src={`/assets/features3.png`} alt="" />
          <span className="font-[ClashDisplay-Semibold] capitalize">
            Budgeting Intervals
          </span>
        </h1>
        <p
          className="text-gray-500 capitalize font-[ClashDisplay-Medium] mt-3"
          ref={(el) => {
            if (el) featuresRef.current[5] = el;
          }}
        >
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
    </div>
  );
};

export default Right;
