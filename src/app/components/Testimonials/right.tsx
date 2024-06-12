"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Right: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate using GSAP when the element comes into view
            gsap.from(entry.target, {
              opacity: 0,
              y: 50,
              duration: 1,
              ease: "power2.out",
            });
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
    <div className="lg:w-[42%] lg:mt-24 mt-[400px] ml-8" ref={containerRef}>
      <h1 className="capitalize text-[28px] font-[ClashDisplay-Semibold] leading-none dark:text-primary-white" ref={(el) => {
        if (el) elementsRef.current[0] = el;
      }}>
        the best financial accounting app ever!
      </h1>
      <p className="font-[ClashDisplay-Medium] pr-14 text-gray-500 capitalize mt-6 leading-relaxed" ref={(el) => {
        if (el) elementsRef.current[1] = el;
      }}>
        "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
        blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
        nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
        suspendisse aliquam."
      </p>
      <img className="mt-6 -ml-1" src={`/assets/testSingle.png`} alt="" ref={(el) => {
        if (el) elementsRef.current[2] = el;
      }} />
      <p className="a mt-4 font-[ClashDisplay-Semibold] dark:text-primary-white" ref={(el) => {
        if (el) elementsRef.current[3] = el;
      }}>
        Nick Jonas
      </p>
    </div>
  );
};

export default Right;
