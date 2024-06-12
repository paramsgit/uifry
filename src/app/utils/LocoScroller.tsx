"use client"
import React, { useEffect, useRef } from 'react';
import  LocomotiveScroll  from 'locomotive-scroll';

interface LocomotiveScrollProps {
  children: React.ReactNode;
}

const LocomotiveScrollContainer: React.FC<LocomotiveScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const locoScroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true, // Enable smooth scrolling
        smartphone: {
          smooth: true, // Enable smooth scrolling on smartphones
        },
      });

      // Update Locomotive Scroll when the content changes
      locoScroll.update();

      // Clean up Locomotive Scroll instance on component unmount
      return () => {
        if (locoScroll) locoScroll.destroy();
      };
    }
  }, []);

  return <div data-scroll-container ref={containerRef}>{children}</div>;
};

export default LocomotiveScrollContainer;
