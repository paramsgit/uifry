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
    <div ref={containerRef} className="w-[50%]">
      <div className="absolute lg:w-[720px] w-[425px] lg:right-[560px] lg:h-[720px]">
        <img
          className="absolute lg:top-0 top-[100px]"
          src={`/assets/colorfeaturesleft.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[0] = el;
          }}
        />
        <img
          className="absolute lg:top-[150px] top-[100px]"
          src={`/assets/star48.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[1] = el;
          }}
        />
        <img
          className="relative lg:scale-95 lg:top-0 top-[100px]"
          src={`/assets/featuresMobile.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[2] = el;
          }}
        />
      </div>
    </div>
  );
};

export default Left;
