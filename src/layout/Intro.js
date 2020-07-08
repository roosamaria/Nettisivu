import React from "react";
import Me from "../images/me.jpg";

export default function Intro() {
  return (
    <div className="main">
      <div id="intro-area">
        <div id="intro">
          <div id="name">
            <h2>Roosa Sipari</h2>
          </div>
          <div id="job-desc">
            <h3>Lifestyle &amp; Business Woman</h3>
          </div>
          <div className="description">
            <p>
              I am studying game development in TAMK Games Academy and I am
              currently looking to change from making games to web development.
            </p>
          </div>
        </div>
      </div>
      <div id="pic-area">
        <img id="picture" src={Me} alt="Face" />
      </div>
    </div>
  );
}
