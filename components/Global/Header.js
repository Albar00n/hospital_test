import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { linksCall } from "../data/index";
const Header = () => {
  return (
    <div className="">
      <Navbar className="bg-body-tertiary">
        <Container>
          <div className="logo">
            <h1 className="logo_one">Med</h1>
            <h1 className="logo_two">dical</h1>
          </div>
          <Nav className="none">
            {linksCall.map((item) => (
              <div className="nav_box" key={item.id}>
                <div className="nav_box_one">
                  <img src={item.icon} alt="" />
                </div>
                <div className="nav_box_two">
                  <p className="text_primary">{item.name}</p>
                  <p className="text_blue">{item.text}</p>
                </div>
              </div>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
