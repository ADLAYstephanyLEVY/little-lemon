export default function TestimonialCard() {
  return (
    <div
      className="card-background"
      style={{
        minWidth: "160px",
        borderRadius: "8px",
        padding: ".5rem",
      }}
    >
      <p
        className="white-text no-margin"
        style={{
          fontWeight: 600,
          lineHeight: 2,
        }}
      >
        Lorem
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "55px",
            backgroundColor: "white",
          }}
        ></div>
        <p style={{ fontSize: "13px" }}>Lorem ipsum</p>
      </div>
      <p
        className="no-margin"
        style={{
          fontWeight: 700,
          fontSize: "13px",
          lineHeight: 2,
        }}
      >
        Lorem ipsum
      </p>
    </div>
  );
}
