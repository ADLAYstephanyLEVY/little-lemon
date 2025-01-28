import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
  );
}
