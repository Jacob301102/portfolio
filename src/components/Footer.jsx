import "./footer.scss";

function Footer({ scrollToRef }) {
  return (
    <footer>
      <nav>
        <p onClick={() => scrollToRef("Home")}>Home</p>
        <p onClick={() => scrollToRef("Projects")}>Projects</p>
        <p onClick={() => scrollToRef("Contact")}>Contact</p>
      </nav>
      <hr />
      <p>2022</p>
    </footer>
  );
}

export default Footer;
