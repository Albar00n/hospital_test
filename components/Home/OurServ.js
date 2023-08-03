/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { services } from "../data";
import { ServicesBar } from "../data";

const OurServ = (props) => {
  const servicesPart1 = services.slice(0, Math.ceil(services.length / 2));
  const servicesPart2 = services.slice(Math.ceil(services.length / 2));

  return (
    <>
      <div className="">
        <div className="d-flex 	justify-content-center align-item-center">
          <div>
            <p className="t1">Care you can believe in</p>
            <p className="t2">Our Services</p>
          </div>
        </div>
        <Container>
          <>
            <Row>
              <Col className="lf">
                {ServicesBar.map((item) => (
                  <div className="div-lf" key={ServicesBar.id}>
                    <img src={item.icon} />
                    <p>{item.text}</p>
                  </div>
                ))}
              </Col>
              <Col className="md" md={12} xl={4}>
                <div>
                  <div>
                    <p>A passion for putting patients first.</p>
                  </div>

                  <div className="">
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

                  <p>
                    <small>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
                      scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare
                      ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in.
                      Consequat faucibus porttitor enim et.
                    </small>
                  </p>
                  <p>
                    <small>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
                      scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa
                      in.
                    </small>
                  </p>
                </div>
              </Col>

              <Col className="" md={12} xl={4}>
                <div>
                  <img
                    className="img"
                    src="/images/Rectangle 13 (1).png"
                    alt="Girl in a jacket"
                    width=""
                    height=""
                  />
                </div>
                <div>
                  <img
                    className="img"
                    src="/images/Rectangle 14.png"
                    alt="Girl in a jacket"
                    width=""
                    height=""
                  />
                </div>
              </Col>
            </Row>
          </>
        </Container>
      </div>
    </>
  );
};

export default OurServ;
