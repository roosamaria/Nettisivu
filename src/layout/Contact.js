import React from "react";
import FontLink from "../components/FontLink";

export default function Contact() {
  return (
    <div className="btn-area read-more-area">
      <div className="cont-info">
        <div className="contact">
          <h4>Email</h4>
          <p>roosa_sipari@hotmail.com</p>
        </div>
        <div className="contact">
          <h4>Phone number</h4>
          <p>+358 40 961 0743</p>
        </div>
      </div>
      <div className="cont-links">
        <FontLink
          target="_blank"
          link="https://www.linkedin.com/in/roosa-sipari-995157199/"
          fontImage="fab fa-linkedin"
          color="#2867b2"
        />
        <FontLink
          target="_blank"
          link="https://www.facebook.com/roosa.sipari"
          fontImage="fab fa-facebook"
          color="#3B5998"
        />
        <FontLink
          target="_blank"
          link="https://www.instagram.com/roosmaria_/?hl=fi"
          fontImage="fab fa-instagram"
          color="#DD2A7B"
        />
      </div>
    </div>
  );
}
