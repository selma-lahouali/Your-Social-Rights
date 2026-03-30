import "./Navbar.css";
import logo from "../../assets/logo.png";
import CNRlogo from "../../assets/CNR_logo.png";
import CNASlogo from "../../assets/CNAS_logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header id="navbarPosition">
      <nav id="navbar">
        <div id="navbarLogo" aria-label="Navigation principale">
          <Link to="/">
            <img src={logo} alt="Vos droit sociaux logo" />
            <h1>Vos droit sociaux</h1>
          </Link>
        </div>
        <div id="navbarLinks">
          <ul id="navbarList">
            <li>
              <Link to="downloads"> Télécharments</Link>
            </li>
            <li>
              <Link to="suggestions">Vos suggestions</Link>
            </li>
            <li>
              <Link to="claims"> Vos réclamations</Link>
            </li>
          </ul>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              id="CNR"
              src={CNRlogo}
              alt="logo CNR pour acceder au site officiel"
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              id="CNAS"
              src={CNASlogo}
              alt="logo CNAS pour acceder au site officiel"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
