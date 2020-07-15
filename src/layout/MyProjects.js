import React, { useState } from "react";
import Overlay from "./Overlay";
import häpeä from "../images/häpeä.jpg";
import Blog from "../components/Blog";
import FontLink from "../components/FontLink";

export default function MyProjects() {
  const [activeProject, setActiveProject] = useState(null);

  const onClick = (proj) => setActiveProject(proj);

  return (
    <React.Fragment>
      <div>
        <div className="title">
          <h1>My Profiles</h1>
        </div>
        <ul className="line">
          <FontLink
            title="Instagram"
            target="_blank"
            link="https://www.instagram.com/roosmaria_/?hl=fi"
            fontImage="fab fa-instagram"
            color="#DD2A7B"
          />
          <FontLink
            title="facebook"
            target="_blank"
            link="https://www.facebook.com/roosa.sipari"
            fontImage="fab fa-facebook"
            color="#3B5998"
          />
          <FontLink
            title="linkedIn"
            target="_blank"
            link="https://www.linkedin.com/in/roosa-sipari-995157199/"
            fontImage="fab fa-linkedin"
            color="#2867b2"
          />
        </ul>
        <div className="read-more-area">
          <h4 className="read-more">Click to profile!</h4>
        </div>
      </div>
      {activeProject ? (
        <Overlay id={activeProject} closeFunc={setActiveProject} />
      ) : null}
    </React.Fragment>
  );
}
