import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";

const backgroundHeader = ({ name }) => {
  return (
    <div className="backgroundHeader">
      <div className="backgroundHeader" data-overlay-dark="3">
        <>
          <Image src="/images/backgroundHeader.png" fill alt="" />
          <Container className="backgroundHeader_container">
            <div className="backgroundHeader_text">
              <p>Home / {name}</p>
              <h2>About</h2>
            </div>
          </Container>
        </>
      </div>
    </div>
  );
};

export default backgroundHeader;
