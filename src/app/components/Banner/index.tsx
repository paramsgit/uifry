"use client";

import { useEffect, useRef } from "react";
import { gsap, TimelineMax } from "gsap";

const Banner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const tl = new TimelineMax({ paused: true });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    imagesRef.current.forEach((image) => {
      tl.fromTo(
        image,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5" // Offset each image animation by 0.5 seconds relative to the previous
      );
    });

    tl.fromTo(
      ".download-button",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3" // Offset the button animation slightly after the last image animation
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.play();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      tl.kill(); // Cleanup timeline on component unmount
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative lg:mx-0 mx-4 flex lg:block justify-center items-center">
      <img
        className="absolute -left-[200px] top-0 lg:top-auto lg:scale-100 scale-75"
        src={`/assets/colordownloadleft.png`}
        alt=""
        ref={(el) => {
          if (el) imagesRef.current[0] = el;
        }}
      />

      <div
        className="relative mt-48 rounded-xl bg-primary-black lg:w-full w-[425px] min-h-[508px] text-primary-white flex lg:flex-row flex-col"
        ref={containerRef}
      >
        {/* Stars */}
        <img
          className="absolute bottom-[100px] left-[450px]"
          src={`/assets/star48white.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[1] = el;
          }}
        />
        <img
          className="absolute -left-[150px] top-[120px]"
          src={`/assets/star48.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[2] = el;
          }}
        />

        <img
          className="absolute lg:-right-[130px] -top-[120px] right-20 lg:scale-100 scale-75"
          src={`/assets/star64.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[3] = el;
          }}
        />

        <img
          className="absolute right-[320px] top-4 lg:scale-100 scale-75"
          src={`/assets/star64white.png`}
          alt=""
          ref={(el) => {
            if (el) imagesRef.current[4] = el;
          }}
        />

        {/* Left */}
        <div className="w-[62%] relative h-[508px] justify-center gap-5 pl-20 flex flex-col">
          <img
            className="absolute lg:-bottom-0 lg:left-[0] -bottom-[466px] -left-[30px] lg:scale-100 scale-75"
            src={`/assets/downloadLeftEllpise.png`}
            alt=""
          />
          <div ref={textRef}>
            <h1 className="font-[ClashDisplay-Bold] lg:text-[48px] text-[44px] capitalize leading-none">
              ready to get started?
            </h1>
            <p className="capitalize tracking-wider leading-relaxed lg:text-[18px]">
              Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
            </p>
          </div>
          <button
            className="bg-primary-white flex text-primary-black w-[208px] h-[60px] rounded-md items-center justify-center gap-2 relative hover:bg-primary-red transition-all hover:text-white lg:scale-100 scale-90 lg:ml-0 -ml-3 download-button"
            style={{ opacity: 0, y: 20 }}
          >
            <span className="font-[ClashDisplay-Medium] lg:text-[18px]">
              Download App
            </span>
            <img className="scale-90" src={`/assets/apple.png`} alt="" />
          </button>
        </div>
        {/* Right */}
        <div className="relative">
          <img
            className="absolute left-[20px] lg:scale-100 scale-75 top-4"
            src={`/assets/colordownloadright.png`}
            alt=""
            ref={(el) => {
              if (el) imagesRef.current[5] = el;
            }}
          />

          <img
            className="absolute lg:left-[60px] lg:-top-0 -top-[567px] left-[78px] lg:scale-100 scale-75"
            src={`/assets/downloadRightEllpise.png`}
            alt=""
            ref={(el) => {
              if (el) imagesRef.current[6] = el;
            }}
          />
          <img
            className="lg:mt-8 pb-20 lg:pb-0 relative w-[425px]"
            src={`/assets/download.png`}
            alt=""
            ref={(el) => {
              if (el) imagesRef.current[7] = el;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
