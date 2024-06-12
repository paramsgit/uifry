"use client"
import Hero from "./Hero";
import dynamic from 'next/dynamic';
import { useEffect,useRef, useState } from "react";
const FAQ = dynamic(() => import('./FAQ'),{ssr:false});
const Banner = dynamic(() => import('./Banner'),{ssr:false});
const Footer = dynamic(() => import('./Footer'),{ssr:false});
const Features = dynamic(() => import('./Features'),{ssr:false});
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
      else if(onScreen2 && !viewTestimonial){setviewTestimonial(true)}
      else if(onScreen3 && !viewFAQ){setviewFAQ(true)}
      else if(onScreen4 && !viewBanner){setviewBanner(true)}
      else if(onScreen5 && !viewFooter){setviewFooter(true)}
      }
      console.log(onScreen1,onScreen2,onScreen3,onScreen4,onScreen5)
    },[onScreen1,onScreen2,onScreen3,onScreen4,onScreen5])
 

  return (
    <>
        <div id="home"> <Hero/></div>
        <div id="features"> <Features/></div>
        <div className="my-3"></div>
        <div id="advantages" className="my-3" ref={ref1}>{viewAdvantages && <Advantages/>}</div>
        <div id="testimonial" className="my-3" ref={ref2}>{viewTestimonial && <Testimonial/>}</div>
        <div id="faq" className="my-3" ref={ref3}>{viewFAQ && <FAQ/>}</div>
        <div id="banner" className="my-3" ref={ref4}>{viewBanner && <Banner/>}</div>
        <div id="footer" className="my-3" ref={ref5}>{viewFooter && <Footer/>}</div>
        
    </>
  );
}
