import React, { useState } from "react";
import Overlay from "./Overlay";
import häpeä from "../images/häpeä.jpg";
import Blog from "../components/Blog";

export default function MyProjects() {
  const [activeProject, setActiveProject] = useState(null);

  const onClick = (proj) => setActiveProject(proj);

  return (
    <React.Fragment>
      <div>
        <div className="title">
          <h1>Blogi</h1>
        </div>
        <ul className="list">
          <Blog
            title="Häpeä"
            image={häpeä}
            description="Mitä on häpeä? Mistä häpeä kantautuu?"
            openFunc={onClick}
            id={1}
          />
          <Blog
            title="työmaa"
            image={häpeä}
            description="Mitä on häpeä? Mistä häpeä kantautuu?"
            openFunc={onClick}
            id={2}
          />
          <Blog
            title="mitähelee"
            image={häpeä}
            description="Mitä on häpeä? Mistä häpeä kantautuu?"
            openFunc={onClick}
            id={3}
          />
        </ul>
        <div className="read-more-area">
          <h4 className="read-more">Click on a project to read more!</h4>
        </div>
      </div>
      {activeProject ? (
        <Overlay id={activeProject} closeFunc={setActiveProject} />
      ) : null}
    </React.Fragment>
  );
}
