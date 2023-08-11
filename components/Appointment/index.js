import React from "react";
import BackgroundHeader from "../Global/backgroundHeader";
import { Container } from "react-bootstrap";
import AppoinSe1 from "./AppoinSe1";
import GoogleMap from "../Contact/GoogleMap";
import Contact from "../Global/Contact";
const AppointmentDetails = () => {
  return <>
    <BackgroundHeader name='Appointement'/>
    <Container>
        <AppoinSe1/>
        <GoogleMap/>
        <Contact/>
    </Container>
  </>;
};

export default AppointmentDetails;
