import React from "react";
import HeaderHome from "../Global/HeaderHome";
import Header from "../Global/Header";
import BackgroundHeader from "../Global/backgroundHeader";
import Second from "./Second";
import Frame from "./Frame";
import OurServ from "./OurServ";
import Alwayscare from "./Alwayscare";
import Footer from "../Global/Footer";
import Maincover from "./Maincover";
import OurDoctors from "../About/OurDoctors";
import News from "../Doctors/News";
import Contact from "../Global/Contact";
const HomeDetails = () => {
  return (
    <>
      <Maincover />
      <Second/>
      <Frame/>
      <OurServ/>
      <Alwayscare/>
      <OurDoctors/>
      <News/>


    </>
  );
};

export default HomeDetails;
