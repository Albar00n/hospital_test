import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";

const SectionBg = () => {
  return (
    <div className="about_box">
      <div className="about_bo">
        <Image src="/images/about_bg.png" alt="" fill />
        <div data-overlay-color="1" />
        <Container className="about_relative">
          <div className="about_bg">
            <img src="/icons/tot.svg" alt="" />
            <p className="text_one">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque
              tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit
              nascetur Consequat faucibus porttitor enim et.
            </p>

            <hr className="hr"/>
            <p className="text_two">John Doe</p>

            <img src="/icons/tot.svg" alt="" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SectionBg;
