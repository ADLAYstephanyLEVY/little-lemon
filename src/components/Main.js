import "../App.css";
import React from "react";
import Testimonials from "./Sections/Testimonials";
import Hero from "./Sections/Hero";
import Specials from "./Sections/Specials";
import ImageCity from '../assets/images/Mario and Adrian A.jpg'

export default function Main() {
  return (
    <React.Fragment>
      <Hero />
      <Specials />
      <Testimonials />
      <section className="padding-section row-align">
        <div style={{
            maxWidth:'50%'
        }}>
          <h1 className="green-text no-margin">Little Lemon</h1>
          <h2
            style={{
              margin: 0,
              lineHeight: 1,
              color: "#F4CE14",
            }}
          >
            Chicago
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <img src={ImageCity} alt="" width={300} />
        </div>
      </section>
    </React.Fragment>
  );
}
