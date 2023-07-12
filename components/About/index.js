import React from "react";
import BackgroundHeader from "../Global/backgroundHeader";
import Hero from "./Hero";
import OurDoctors from "./OurDoctors";
import SectionBg from "../Global/SectionBg";
import Contact from "../Global/Contact";

const AboutDetails = () => {
  return (
    <>
      <BackgroundHeader name="about" />
      <Hero />
      <SectionBg />
      <OurDoctors />
      {/*  */}
      <Contact />
    </>
  );
};

export default AboutDetails;
