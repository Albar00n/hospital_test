import React from "react";
import BackgroundHeader from "../Global/backgroundHeader";
import Hero from "./Hero";
import OurDoctors from "./OurDoctors";
import SectionBg from "../Global/SectionBg";
import Contact from "../Global/Contact";
import Footer from "../Global/Footer";

const AboutDetails = () => {
  return (
    <>
      <BackgroundHeader name="about" />
      <Hero />
      <SectionBg />
      <OurDoctors />
      {/*  */}
      <Contact />
      {/* <Footer/> */}
    </>
  );
};

export default AboutDetails;
