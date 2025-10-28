import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/category/business" className="nav-link">
        Business
      </Link>
      <Link to="/category/entertainment" className="nav-link">
        Entertainment
      </Link>
      <Link to="/category/health" className="nav-link">
        Health
      </Link>
      <Link to="/category/science" className="nav-link">
        Science
      </Link>
      <Link to="/category/sports" className="nav-link">
        Sports
      </Link>
      <Link to="/category/technology" className="nav-link">
        Technology
      </Link>
    </nav>
  );
};

export default Nav;
