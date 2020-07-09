import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

export default function Header() {
  return (
    <div className="header">
      <img className="logoimage" src={logo} alt="image" />
      <nav>
        <ul className="Navi list">
          <li className="navitem">
            <Link to="/">Home</Link>
          </li>
          <li className="navitem">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
