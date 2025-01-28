import Restaurant from "../../assets/images/restauranfood.jpg";

export default function Hero() {
  return (
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
  );
}
