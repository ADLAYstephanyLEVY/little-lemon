import Person1 from "../../assets/images/pexels-italo-melo-881954-2379004.jpg";
import Person2 from "../../assets/images/pexels-pixabay-415829.jpg";
import Person3 from "../../assets/images/pexels-tarzine-jackson-254126-773371.jpg";
import TestimonialCard from "../../widgets/TestimonialCard";

export default function Testimonials() {
  return (
    <section
      className="padding-section primary-section"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 className="white-text">Testimonials</h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <TestimonialCard bg={Person1} />
        <TestimonialCard bg={Person2} />
        <TestimonialCard bg={Person3} />
        <TestimonialCard bg={Person1} />
      </div>
    </section>
  );
}
