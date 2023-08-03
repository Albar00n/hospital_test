import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { num } from "../data";

const Alwayscare = (props) => {
  return (
    <Container>
      <div>
        <div className="text-part text-center">
          <p>Always Caring</p>
          <p>Our Specialties</p>
        </div>
        <div className="w-full">
          <Row className="d-flex justify-content-center align-items-center w-full">
            {num.map((item) => (
              <Col sx={2} md={3} xl={3} key={item.id} className="column m-1">
                <img src={item.icon} />
                <p className="m-2">{item.name}</p>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Alwayscare;
