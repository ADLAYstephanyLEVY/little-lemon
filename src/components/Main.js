import Restaurant from "../assets/images/restauranfood.jpg";
import GreekSalad from "../assets/images/greek salad.jpg";
import LemonDessert from '../assets/images/lemon dessert.jpg'
import "../App.css";
import Card from "../widgets/Card";

export default function Main() {
  return (
    <>
      <main className="padding-section primary-section row-align">
        <div style={{ maxWidth: "40%" }}>
          <div>
            <h1 className="yellow-text no-margin">Little Lemon</h1>
            <h2 className="white-text no-margin">Chicago</h2>
            <p className="white-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="primary-button">Book a table</button>
        </div>
        <div style={{ maxWidth: "30%" }}>
          <img
            src={Restaurant}
            alt=""
            width={250}
            style={{ borderRadius: "8px" }}
          />
        </div>
      </main>
      <section className="padding-section">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 className="green-text">Specials</h2>
          <button className="primary-button">Book a table</button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <Card image={GreekSalad} />
          <Card image={LemonDessert} />
          <Card image={GreekSalad}/>
        </div>
      </section>
      <section className="padding-section primary-section">
        <h2>Testimonials</h2>
        <div>
          <p>Lorem</p>
          <div>
            image
            <p>Lorem</p>
          </div>
          <p>Lorem</p>
        </div>
      </section>
      <section className="padding-section">
        <div>
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
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
    </>
  );
}
