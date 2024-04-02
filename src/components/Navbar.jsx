import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container">
      <a href="/" className="title">
        <h1>MyWebsite</h1>
      </a>

      <nav className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/About">
          About
        </Link>
        <Link className="link" to="/Contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
