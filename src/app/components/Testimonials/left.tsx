"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Left: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate using GSAP when the element comes into view
            gsap.from(entry.target, {
              opacity: 0,
              x: -50,
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
    <div className="lg:w-[60%] w-[425px]" ref={containerRef}>
      <img
        className="absolute lg:top-[70px] lg:-left-[40px] lg:scale-100 scale-75 -left-16 top-4"
        src={`/assets/colortes.png`}
        alt=""
        ref={(el) => {
          if (el) imagesRef.current[0] = el;
        }}
      />

      <img
        className="absolute lg:-bottom-[110px] lg:-left-[130px]"
        src={`/assets/star48.png`}
        alt=""
        ref={(el) => {
          if (el) imagesRef.current[1] = el;
        }}
      />
      <img
        className="absolute lg:-top-[80px] lg:-left-[65px] lg:w-auto w-[425px]"
        src={`/assets/tesEllipse.png`}
        alt=""
        ref={(el) => {
          if (el) imagesRef.current[2] = el;
        }}
      />
      <img
        className="absolute"
        src={`/assets/testimonialWhole.png`}
        alt=""
        ref={(el) => {
          if (el) imagesRef.current[3] = el;
        }}
      />
    </div>
  );
};

export default Left;
