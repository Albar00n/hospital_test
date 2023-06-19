import React from "react";
import NavbarBox from "../Navbar";
import Header from "../Global/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <NavbarBox />
      {children}
    </>
  );
};

export default Layout;
