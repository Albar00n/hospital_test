import React from "react";
import DoctorsCard from "./DoctorsCard";
import BackgroundHeader from "../Global/backgroundHeader";
import SectionBg from "../Global/SectionBg";
import News from "./News";
import Contact from "../Global/Contact";

const DoctorsDetails = () => {
  return <>
      <BackgroundHeader name='Doctors'/>
      <DoctorsCard/>
      <SectionBg/>
      <News/>
      <Contact/>

  </>;
};

export default DoctorsDetails;
