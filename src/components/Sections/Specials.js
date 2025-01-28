import Card from "../../widgets/Card";
import GreekSalad from "../../assets/images/greek salad.jpg";
import LemonDessert from "../../assets/images/lemon dessert.jpg";

export default function Specials() {
  return (
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
      <div style={{ display: "flex", gap: "2rem" }}>
        <Card image={GreekSalad} />
        <Card image={LemonDessert} />
        <Card image={GreekSalad} />
      </div>
    </section>
  );
}
