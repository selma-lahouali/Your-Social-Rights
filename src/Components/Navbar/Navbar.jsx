import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import CNRlogo from "../../assets/CNR_logo.png";
import CNASlogo from "../../assets/CNAS_logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div id="nabvar">
      <div id="navbarLogo">
        <Link to="/">
          <img src={logo} alt="your social rights logo" />
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
          <img id="CNR" src={CNRlogo} alt="CNR logo" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img id="CNAS" src={CNASlogo} alt="CNAS logo" />
        </a>
      </div>
    </div>
  );
}
