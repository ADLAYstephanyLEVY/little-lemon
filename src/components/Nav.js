import Logo from "../assets/icons_assets/Logo.svg";

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={Logo} alt="" />
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "1rem",
        }}
      >
        <a href="/">
          <li>Home</li>
        </a>
        <a href="">
          <li>About</li>
        </a>
        <a href="">
          <li>Menu</li>
        </a>
        <a href="">
          <li>Reservations</li>
        </a>
        <a href="/booking">
          <li>Order online</li>
        </a>
        <a href="">
          <li>Login</li>
        </a>
      </ul>
    </nav>
  );
}
