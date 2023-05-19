import "./header.scss";

function Header({ scrollToRef }) {
  return (
    <header>
      <h2>Jacob</h2>
      <nav>
        <p onClick={() => scrollToRef("home")}>Home</p>
        <p onClick={() => scrollToRef("projects")}>Projects</p>
        <p onClick={() => scrollToRef("contact")}>Contact</p>
      </nav>
    </header>
  );
}

export default Header;
