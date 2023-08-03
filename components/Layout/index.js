import React from "react";
import NavbarBox from "../Navbar";
import Header from "../Global/Header";
import Footer from "../Global/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <NavbarBox />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
