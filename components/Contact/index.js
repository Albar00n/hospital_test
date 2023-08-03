import React from "react";
import BackgroundHeader from "../Global/backgroundHeader";
import GoogleMap from "./GoogleMap";
import { Container } from "react-bootstrap";
import GetIn from "./GetIn";
import News from "../Doctors/News";
const ContactDetails = () => {
  return (
  <>
    <BackgroundHeader name='News'/>
    <Container>
      <GoogleMap/>
      <GetIn/>
      <News/>
    </Container>

  </>

  )

};

export default ContactDetails;
