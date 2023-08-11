import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { cardsContact } from "../data";

const GetIn = (props) => {
  return (
    <div className="contact d-flex" style={{ gap: "10px" }}>
      <div style={{ width: "486px" }}>
        <div style={{ width: "160px", height: "66px", marginBottom: "32px" }}>
          <p className="p9">Get in touch</p>
          <p className="p10">Contact</p>
        </div>
        <Form className="">
          <div className="d-flex">
            <input
              type="text"
              placeholder="Name"
              style={{
                width: "243px",
                border: " 1px solid",
                padding: "10px",
                color: "#FCFEFE",
                height: "50px",
                backgroundColor: "#1F2B6C",
                borderRadius: "5px 0px 0px 0px",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              style={{
                width: "243px",
                border: " 1px solid",
                padding: "10px",
                color: "#FCFEFE",
                height: "50px",
                backgroundColor: "#1F2B6C",
                borderRadius: "0px 5px 0px 0px",
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              style={{
                width: "486px",
                border: " 1px solid",
                padding: "10px",
                color: "#FCFEFE",
                height: "50px",
                backgroundColor: "#1F2B6C",
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Message"
              style={{
                width: "486px",
                border: " 1px solid",
                padding: "10px",
                color: "#FCFEFE",
                height: "235px",
                backgroundColor: "#1F2B6C",
              }}
            />
          </div>
          <div>
            <input
              type="submit"
              placeholder="Submit"
              style={{
                width: "486px",
                border: " 1px solid",
                padding: "10px",
                color: "#1F2B6C",
                height: "50px",
                backgroundColor: "#BFD2F8",
                borderRadius: "0px 0px 5px 5px",
              }}
            />
          </div>
        </Form>
      </div>
      <Row style={{ width: "486px" }}>
        {cardsContact.map((item) => (
          <Col xl={6} key={item.id}>
            <div
              style={{
                width: "233px",
                height: "233px",
                background: "#BFD2F8",
                paddingTop: "52px",
                paddingLeft: "26px",
              }} id="bb5" >
              <div>
                <img src={item.icon} style={{ marginBottom: "10px" }} />
              </div>
              <div>
                <p>{item.name}</p>
              </div>
              <div>
                <p>(237) 681-812-255</p>
                <p>(237) 666-331-894</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GetIn;
