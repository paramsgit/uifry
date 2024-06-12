"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FAQ: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const faqItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    faqItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="lg:mt-72 mt-44 min-h-[900px] lg:w-auto w-[425px] lg:mx-0 mx-4 h-auto">
      <div className="relative flex flex-col">
        <img
          className="absolute lg:right-[420px] -top-[120px] lg:scale-100 scale-90 right-10 lg:top-[80px]"
          src={`/assets/star64.png`}
          alt=""
        />
        <h1 className="uppercase lg:text-[18px] font-[ClashDisplay-Medium] tracking-widest text-primary-red">
          FAQ
        </h1>
        <h1 className="font-[ClashDisplay-Bold] lg:text-[48px] text-[44px] capitalize mt-3 w-[450px] leading-none dark:text-primary-white">
          frequently asked questions
        </h1>
      </div>
      <div className="w-full min-h-[600px] mt-16 flex gap-4 lg:flex-row flex-col">
        <div className="lg:w-[535px] w-[425px] flex flex-col min-h-[181px] lg:gap-5 gap-2">
          {/* FAQ Item 1 */}
          <div
            className="bg-primary-red text-primary-white rounded-md lg:p-[28px] p-[20px] lg:py-[32px] py-[28px] lg:mr-0 mr-8"
            ref={(el) => { if (el) faqItemsRef.current[0] = el; }}
          >
            <h1 className="capitalize lg:text-[28px] text-[24px] font-[ClashDisplay-Semibold] leading-none">
              the best financial accounting app ever!
            </h1>
            <p className="font-[ClashDisplay-Medium] tracking-wider capitalize lg:mt-4 mt-2 lg:w-auto">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan as. In
              ultrices malesuada elit mauris
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div
            className="text-primary-black dark:text-primary-white rounded-md lg:p-[28px] p-[20px] lg:py-[32px] py-[28px] lg:mr-0 mr-8"
            ref={(el) => { if (el) faqItemsRef.current[1] = el; }}
          >
            <h1 className="capitalize lg:text-[28px] text-[24px] font-[ClashDisplay-Semibold] leading-none">
              the best financial accounting app ever!
            </h1>
            <p className="font-[ClashDisplay-Medium] tracking-wider capitalize lg:mt-4 mt-2 lg:w-auto">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan as. In
              ultrices malesuada elit mauris
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div
            className="bg-primary-red text-primary-white rounded-md lg:p-[28px] p-[20px] lg:py-[32px] py-[28px] lg:mr-0 mr-8"
            ref={(el) => { if (el) faqItemsRef.current[2] = el; }}
          >
            <h1 className="capitalize lg:text-[28px] text-[24px] font-[ClashDisplay-Semibold] leading-none">
              the best financial accounting app ever!
            </h1>
            <p className="font-[ClashDisplay-Medium] tracking-wider capitalize lg:mt-4 mt-2 lg:w-auto">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan as. In
              ultrices malesuada elit mauris
            </p>
          </div>
        </div>

        <div className="lg:w-[535px] w-[425px] flex flex-col min-h-[181px] lg:gap-5 gap-2">
          {/* FAQ Item 4 */}
          <div
            className="text-primary-black dark:text-primary-white rounded-md lg:p-[28px] p-[20px] lg:py-[32px] py-[28px] lg:mr-0 mr-8"
            ref={(el) => { if (el) faqItemsRef.current[3] = el; }}
          >
            <h1 className="capitalize lg:text-[28px] text-[24px] font-[ClashDisplay-Semibold] leading-none">
              the best financial accounting app ever!
            </h1>
            <p className="font-[ClashDisplay-Medium] tracking-wider capitalize lg:mt-4 mt-2 lg:w-auto">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan as. In
              ultrices malesuada elit mauris
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div
            className="bg-primary-red text-primary-white rounded-md lg:p-[28px] p-[20px] lg:py-[32px] py-[28px] lg:mr-0 mr-8"
            ref={(el) => { if (el) faqItemsRef.current[4] = el; }}
          >
            <h1 className="capitalize lg:text-[28px] text-[24px] font-[ClashDisplay-Semibold] leading-none">
              the best financial accounting app ever!
            </h1>
            <p className="font-[ClashDisplay-Medium] tracking-wider capitalize lg:mt-4 mt-2 lg:w-auto">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan as. In
              ultrices malesuada elit mauris
            </p>
          </div>

          {/* FAQ Item 6 */}
          <div
            className="text-primary-black dark:text-primary-white rounded-md lg:p-[28px] p-[20px] lg:py-[32px] py-[28px] lg:mr-0 mr-8"
            ref={(el) => { if (el) faqItemsRef.current[5] = el; }}
          >
            <h1 className="capitalize lg:text-[28px] text-[24px] font-[ClashDisplay-Semibold] leading-none">
              the best financial accounting app ever!
            </h1>
            <p className="font-[ClashDisplay-Medium] tracking-wider capitalize lg:mt-4 mt-2 lg:w-auto">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan as. In
              ultrices malesuada elit mauris
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
