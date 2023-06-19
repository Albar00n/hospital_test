import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { services } from "../data/index";
const Hero = () => {
  const servicesPart1 = services.slice(0, Math.ceil(services.length / 2));
  const servicesPart2 = services.slice(Math.ceil(services.length / 2));
  return (
    <>
      <div
        style={{
          height: "20vh",
        }}
      />
      <Container>
        <Row>
          <Col className="justify-content-center d-flex align-items-center">
            <img className="img-about1" src="/images/about-img.png" alt="imgs" />
          </Col>
          <Col className="justify-content-center  align-items-center pt-5">
            <div className="div-com2">
              <p className="p-style1">Welcome to Hospital name</p>
              <h1 className="p-style2">Best Care for Your Good Health</h1>
            </div>
            <div className="div-com3">
              <Row>
                <Col>
                  {servicesPart1.map((service) => (
                    <div className="div-com4" key={service.id}>
                      <p className="point"></p>
                      <p className="text">{service.name}</p>
                    </div>
                  ))}
                </Col>
                <Col>
                  {servicesPart2.map((service) => (
                    <div className="div-com4" key={service.id}>
                      <p className="point"></p>
                      <p className="text">{service.name}</p>
                    </div>
                  ))}
                </Col>
              </Row>
            </div>
            <div className="div-com5">
              <p className="p-style3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
                scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare
                Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat
                faucibus porttitor enim et.
              </p>
            </div>
            <div className="div-com5">
              <p className="p-style3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
                scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          height: "10vh",
        }}
      />
    </>
  );
};

export default Hero;
