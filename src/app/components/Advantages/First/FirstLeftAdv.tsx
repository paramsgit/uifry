"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FirstLeftAdv: React.FC = () => {
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

  return (
    <>
      <div
        ref={containerRef}
        className="lg:mx-0 mx-4 lg:w-[46%] w-[425px]"
      >
        <h1
          className="uppercase lg:text-[18px] font-[ClashDisplay-Medium] tracking-widest text-primary-red"
          ref={(el) => {
            if (el) elementsRef.current[0] = el;
          }}
        >
          Advantages
        </h1>
        <h1
          className="font-[ClashDisplay-Bold] lg:text-[48px] text-[44px] dark:text-primary-white"
          ref={(el) => {
            if (el) elementsRef.current[1] = el;
          }}
        >
          Why Choose Uifry?
        </h1>
        <div className="mt-7">
          <div
            className="flex items-center gap-5"
            ref={(el) => {
              if (el) elementsRef.current[2] = el;
            }}
          >
            <div className="flex items-center justify-center lg:size-11 size-9 bg-primary-red rounded-full">
              <img src={`/assets/bell.png`} alt="" />
            </div>
            <span className="font-[ClashDisplay-Semibold] lg:text-[28px] text-[24px] dark:text-primary-white">
              Clever Options
            </span>
          </div>
          <p
            className="font-[ClashDisplay-Medium] w-[400px] lg:w-auto text-gray-500 capitalize mt-6"
            ref={(el) => {
              if (el) elementsRef.current[3] = el;
            }}
          >
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies
            . In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
            blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
            nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </>
  );
};

export default FirstLeftAdv;
