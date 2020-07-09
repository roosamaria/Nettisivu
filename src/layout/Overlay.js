import React from "react";
import FontLink from "../components/FontLink";

export default function Overlay({ id, closeFunc }) {
  const state = {
    projects: [
      {
        id: 1,
        name: "Häpeä",
        desc:
          "First proper released project. I was the main programmer in this project.",
        detailDesc:
          "We had big dreams for this project. We we're supposed to have so much more in it but quickly reality hit us and we had to rethink our scope for the project. I think the game ended up fine even though there is a lot I would change, if I were doing now. The game was fairly well received even though it is lacking in content relative to proper match-3 games.",
        releaseDate: "January 1, 2019",
        publisher: "Self published",
      },
      {
        id: 2,
        name: "työmaa",
        desc:
          "First proper released project. I was the main programmer in this project.",
        detailDesc:
          "We had big dreams for this project. We we're supposed to have so much more in it but quickly reality hit us and we had to rethink our scope for the project. I think the game ended up fine even though there is a lot I would change, if I were doing now. The game was fairly well received even though it is lacking in content relative to proper match-3 games.",
        releaseDate: "January 1, 2019",
        publisher: "Self published",
      },
    ],
  };

  const proj = state.projects.filter((project) => project.id === id)[0];

  const {
    name,
    desc,
    detailDesc,
    projLength,
    releaseDate,
    publisher,
    respons,
    download,
    github,
  } = proj;

  return (
    <React.Fragment>
      <div
        id="overlay"
        className="clickable"
        onClick={() => closeFunc(0)}
      ></div>
      <div id="area">
        <div className="title-area">
          <h2 id="project-name">{name}</h2>
          <div className="close-btn-area">
            <i
              onClick={() => closeFunc(0)}
              className="fas fa-times close-button"
            ></i>
          </div>
        </div>
        <p className="description bold">{desc}</p>
        <p className="description">{detailDesc}</p>
        <div id="info">
          <div className="block">
            <h4 className="block-headline">Release Date</h4>
            <p className="block-underline">{releaseDate}</p>
          </div>
          <div className="block">
            <h4 className="block-headline">Publisher</h4>
            <p className="block-underline">{publisher}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
