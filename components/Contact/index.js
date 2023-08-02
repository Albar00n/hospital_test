import React from "react";
import BackgroundHeader from "../Global/backgroundHeader";
import GoogleMap from "./GoogleMap";
import { Container } from "react-bootstrap";
import GetIn from "./GetIn";
import News from "../Doctors/News";
import Footer from "../Global/Footer";
const ContactDetails = () => {
  return (
  <>
    <BackgroundHeader name='News'/>
    <Container>
      <GoogleMap/>
      <GetIn/>
      <News/>
    </Container>
    <Footer/>
  </>

  )
  
};

export default ContactDetails;
