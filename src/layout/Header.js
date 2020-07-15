import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import navi1 from "../images/navi1.jpg";
import navi2 from "../images/navi2.jpg";

export default function Header() {
  return (
    <div className="header">
      <img className="logoimage" src={logo} alt="image" />
      <nav>
        <ul className="Navi list">
          <li className="navitem">
            <Link to="/">
              <img className="linkinkuvake" src={navi1} alt="image" />
            </Link>
          </li>
          <li className="navitem">
            <Link to="/about">
              <img className="linkinkuvake" src={navi2} alt="image" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
