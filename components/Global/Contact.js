/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { cardsContact } from "../data/index";
const Contact = () => {
  return (
    <Container>
    <div className="contact">
      <Container>
        <div className="contact_text  mb-5">
          <p className="context_text_one">Get in touch</p>
          <p className="context_text_two">Contact</p>
        </div>
        <Row className="contact_box">
          {cardsContact.map((item) => (
            <Col xs={12} md={5} xl={3}  className="contact_box_col" key={item.id}>
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  margin: ".7rem 0",
                }}
              />
              <p className="context_text_two">{item.name}</p>
              <p
                style={{
                  margin: "0",
                  padding: "0",
                }}>
                (237) 681-812-255
              </p>
              <p>(237) 681-812-255</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    </Container>
  );
};

export default Contact;
