/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { cards } from "../data/index";
const OurDoctors = () => {
  return (
    <>
      <Container className="">
        <div className="div-se">
          <div className="div-com6">
            <p className="p-style6">Trusted Care</p>
            <p className="p-style4">Our Doctors</p>
          </div>
          <div className="">
            <Row>
              {cards.map((item) => (
                <Col
                  xl={4}
                  md={12}
                  className="d-flex align-items-center justify-content-center p-2"
                  key={item.id}>
                  <Card>
                    <Card.Img variant="top" className="img-card" src="/images/photo2.png" />
                    <Card.Body className="body-card">
                      <Card.Text className="card-body">{item.name}</Card.Text>
                      <Card.Text className="card-body2">Neurology</Card.Text>
                      <Card.Text className="img-ss">
                        <img src="/images/linkin.png" alt={item.name} />
                        <img src="/images/facebook.png" alt={item.name} />
                        <img src="/images/insta.png" alt={item.name} />
                      </Card.Text>
                    </Card.Body>
                    <div className="div-card">
                      <p className="text-style">View Profile</p>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            {/* <div className="points">
              <img src="/images/G-62.png" />
            </div> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurDoctors;
