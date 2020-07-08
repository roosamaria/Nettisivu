import React, { useState } from "react";
import Overlay from "./Overlay";

export default function MyProjects() {
  const [activeProject, setActiveProject] = useState(null);

  const onClick = (proj) => setActiveProject(proj);

  return (
    <React.Fragment>
      <div>
        <div className="title">
          <h1>My Released Projects</h1>
        </div>
        <ul className="list">
          <li className="item" onClick={() => onClick(1)}>
            <p className="clickable">Necrox</p>
            <p className="clickable indent">Match-3 game for Android</p>
          </li>
          <li className="item" onClick={() => onClick(2)}>
            <p className="clickable">All That's Left</p>
            <p className="clickable indent">3D Platformer for PC</p>
          </li>
          <li className="item" onClick={() => onClick(3)}>
            <p className="clickable">Unreleased Yle project</p>
            <p className="clickable indent">A game about an upcoming show</p>
          </li>
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
