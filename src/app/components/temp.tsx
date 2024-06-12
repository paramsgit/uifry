"use client"
import Hero from "./Hero";
import dynamic from 'next/dynamic';
import { useEffect,useRef, useState } from "react";
const FAQ = dynamic(() => import('./FAQ'),{ssr:false});
const Banner = dynamic(() => import('./Banner'),{ssr:false});
const Footer = dynamic(() => import('./Footer'),{ssr:false});
const Features = dynamic(() => import('./Feature'),{ssr:false});
const Advantages = dynamic(() => import('./Advantages'),{ssr:false});
const Testimonial = dynamic(() => import('./Testimonials'),{ssr:false});

import useOnScreen from "../utils/useOnScreen";
export default function Container() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const onScreen1 = useOnScreen(ref1);
  const onScreen2 = useOnScreen(ref2);
  const onScreen3 = useOnScreen(ref3);
  const onScreen4 = useOnScreen(ref4);
  const onScreen5 = useOnScreen(ref5);
  const [viewAdvantages,setviewAdvantages]=useState(false)
  const [viewTestimonial,setviewTestimonial]=useState(false)
  const [viewFAQ,setviewFAQ]=useState(false)
  const [viewBanner,setviewBanner]=useState(false)
  const [viewFooter,setviewFooter]=useState(false)

    useEffect(()=>{
     { if(onScreen1 && !viewAdvantages){setviewAdvantages(true)}
      if(onScreen2 && !viewTestimonial){setviewTestimonial(true)}
      if(onScreen3 && !viewFAQ){setviewFAQ(true)}
      if(onScreen4 && !viewBanner){setviewBanner(true)}
      if(onScreen5 && !viewFooter){setviewFooter(true)}
      }
    },[onScreen1,onScreen2,onScreen3,onScreen4,onScreen5])
 

  return (
    <>
        <Hero/>
        <Features/>
        <div className="my-3"></div>
        <div className="my-3" ref={ref1}>{viewAdvantages && <Advantages/>}</div>
        <div className="my-3" ref={ref2}>{viewTestimonial && <Testimonial/>}</div>
        <div className="my-3" ref={ref3}>{viewFAQ && <FAQ/>}</div>
        <div className="my-3" ref={ref4}>{viewBanner && <Banner/>}</div>
        <div className="my-3" ref={ref5}>{viewFooter && <Footer/>}</div>
        
    </>
  );
}











"use client"
import Hero from "./Hero";
import dynamic from 'next/dynamic';
import { useEffect,useRef, useState } from "react";
const FAQ = dynamic(() => import('./FAQ'),{ssr:false});
const Banner = dynamic(() => import('./Banner'),{ssr:false});
const Footer = dynamic(() => import('./Footer'),{ssr:false});
const Features = dynamic(() => import('./Feature'),{ssr:false});
const Advantages = dynamic(() => import('./Advantages'),{ssr:false});
const Testimonial = dynamic(() => import('./Testimonials'),{ssr:false});

import useOnScreen from "../utils/useOnScreen";
export default function Container() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const viewFeatures = useOnScreen(ref1);
  const viewAdvantages = useOnScreen(ref2);
  const viewTestimonial = useOnScreen(ref3);
  const viewFAQ = useOnScreen(ref4);
  const viewBanner = useOnScreen(ref5);
  const viewFooter = useOnScreen(ref6);
  const [has1,sethas1]=useState(false)
  const [has2,sethas2]=useState(false)
  const [has3,sethas3]=useState(false)
  const [has4,sethas4]=useState(false)
  const [has5,sethas5]=useState(false)
  const [has6,sethas6]=useState(false)

    useEffect(()=>{
     { if(viewFeatures && !has1){sethas1(true)}
      if(viewAdvantages && !has2){sethas2(true)}
      if(viewTestimonial && !has3){sethas3(true)}
      if(viewFAQ && !has4){sethas4(true)}
      console.log(viewFeatures,viewAdvantages,viewTestimonial,viewFAQ)}
    },[viewFeatures,viewAdvantages,viewTestimonial,viewFAQ])
 

  return (
    <>
        <Hero/>
        <Hero/>
        <div className="my-3" ref={ref1}>{has1 && <Features/>}</div>
        <div className="my-3" ref={ref2}>{has2 && <Advantages/>}</div>
        <div className="my-3" ref={ref3}>{has3 && <Testimonial/>}</div>
        <div className="my-3" ref={ref4}>{has4 && <FAQ/>}</div>
        <div className="my-3" ref={ref5}>{has5 && <Banner/>}</div>
        <div className="my-3" ref={ref6}>{has6 && <Footer/>}</div>
        
    </>
  );
}










cht
"use client";

import Hero from "./Hero";
import dynamic from "next/dynamic";
import useVisibility from "../utils/useVisibility";

const FAQ = dynamic(() => import("./FAQ"), { ssr: false });
const Banner = dynamic(() => import("./Banner"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });
const Features = dynamic(() => import("./Feature"), { ssr: false });
const Advantages = dynamic(() => import("./Advantages"), { ssr: false });
const Testimonial = dynamic(() => import("./Testimonials"), { ssr: false });

export default function Container() {
  const [ref1, viewFeatures] = useVisibility();
  const [ref2, viewAdvantages] = useVisibility();
  const [ref3, viewTestimonial] = useVisibility();
  const [ref4, viewFAQ] = useVisibility();
  const [ref5, viewBanner] = useVisibility();
  const [ref6, viewFooter] = useVisibility();

  return (
    <>
      <Hero />
      <div ref={ref1}>{viewFeatures && <Features />}</div>
      <div ref={ref2}>{viewAdvantages && <Advantages />}</div>
      <div ref={ref3}>{viewTestimonial && <Testimonial />}</div>
      <div ref={ref4}>{viewFAQ && <FAQ />}</div>
      <div ref={ref5}>{viewBanner && <Banner />}</div>
      <div ref={ref6}>{viewFooter && <Footer />}</div>
    </>
  );
}
