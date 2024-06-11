"use client"

import Advantages from "./Advantages";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero/hero"
import Testimonial from "./Testimonials";
import Features from "./features";

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
