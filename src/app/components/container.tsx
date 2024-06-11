"use client"

import Advantages from "./Advantages";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Footer from "./Footer";

import Testimonial from "./Testimonials";
import Features from "./Features";
import Hero from "./Hero";

export default function Container() {
  return (
    <>
        <Hero/>
        <Features/>
        <Advantages/>
        <Testimonial/>
        <FAQ/>
        <Banner/>
        <Footer/>
    </>
  );
}
