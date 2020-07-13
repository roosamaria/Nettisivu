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
              I am a BBA student from Finland. I'm studying International
              Business in Haaga-Helia University of Applied Sciences. My
              specialization is cutomer relationship management and marketing.
              After my BBA studies I have planned to do Master's degree in
              globalisation. <br />
              <span style={{ fontWeight: "bold" }}>
                On my blog you can read about personal growth and how to build
                and develop your professional identity.
              </span>
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
