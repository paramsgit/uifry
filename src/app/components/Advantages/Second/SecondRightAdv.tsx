"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SecondRightAdv: React.FC = () => {
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
