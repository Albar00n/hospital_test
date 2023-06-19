import { useState } from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { links } from "../data/index";

function NavbarBox() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <Navbar className="bg-body-tertiary bg-blue">
        <Container>
          <Nav
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Nav className="me-auto my-2 my-lg-0 none" style={{ maxHeight: "100px" }} navbarScroll>
              {links.map((item) => (
                <Link className="color-white mr-3" key={item.id} href={item.link}>
                  <>{item.name}</>
                </Link>
              ))}
            </Nav>
            <div className="d-flex">
              <img src="/icons/search.svg" alt="" className="mx-3" />
              <Button className="button_nav">Appointment</Button>
              <img
                src="/icons/menu.svg"
                alt=""
                className="ml-3 d-lg-none"
                onClick={handleMenuClick}
              />
            </div>
          </Nav>
          {showMenu && (
            <Nav className="my-2 my-lg-0 d-lg-none" style={{ maxHeight: "100px" }} navbarScroll>
              {links.map((item) => (
                <Link className="color-white mr-3" key={item.id} href={item.link}>
                  <>{item.name}</>
                </Link>
              ))}
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarBox;
