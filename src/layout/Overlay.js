import React from "react";
import FontLink from "../components/FontLink";

export default function Overlay({ id, closeFunc }) {
  const state = {
    projects: [
      {
        id: 1,
        name: "Necrox",
        desc:
          "First proper released project. I was the main programmer in this project.",
        detailDesc:
          "We had big dreams for this project. We we're supposed to have so much more in it but quickly reality hit us and we had to rethink our scope for the project. I think the game ended up fine even though there is a lot I would change, if I were doing now. The game was fairly well received even though it is lacking in content relative to proper match-3 games.",
        projLength: "Four months",
        releaseDate: "January 1, 2019",
        publisher: "Self published",
        respons: "Programmer",
        github: "https://github.com/Molefishbob/Necrox",
        download:
          "https://play.google.com/store/apps/details?id=com.InstanceGames.Necrox",
      },
      {
        id: 2,
        name: "All That's Left",
        desc:
          "Large project with many learning experiences about working together as a team and how to manage a project of this scale.",
        detailDesc:
          "Me and my team made this game for our schools spring 3D game project. This project was not only our first major 3D game but also our largest project ever. We saw how important and hard good communication in the team is. We finished the game on time and managed to get a decent amount of attention to the released game.",
        projLength: "Four months",
        releaseDate: "May 28, 2019",
        publisher: "Self published",
        respons: "Programmer",
        github: "https://github.com/Molefishbob/AllThatsLeft",
        download: "https://instance-games.itch.io/allthatsleft",
      },
      {
        id: 3,
        name: "Unreleased project for YLE",
        desc:
          "My first proper client project. The project was fun to make and I learned much during it.",
        detailDesc:
          "Yle wanted a game for an upcoming show on Pikku Kakkonen. We came in, pitched our idea and Yle accepted it. We worked closely with Yle during the spring of 2020 to make a good game that fits the show. Working with Yle, was good real life experience of working closely with a client with their own visual and gameplay related ideas/desires.",
        projLength: "Three months",
        releaseDate: "August 2020",
        publisher: "Yleisradio Oy",
        respons: "Programmer",
        github: "",
        download:
          "https://play.google.com/store/apps/details?id=air.fi.yle.pikkukakkonen&hl=en",
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
        <p className="description">{desc}</p>
        <p className="description">{detailDesc}</p>
        <div id="info">
          <div className="block">
            <h4 className="block-headline">Project length</h4>
            <p className="block-underline">{projLength}</p>
          </div>
          <div className="block">
            <h4 className="block-headline">Release Date</h4>
            <p className="block-underline">{releaseDate}</p>
          </div>
          <div className="block">
            <h4 className="block-headline">Publisher</h4>
            <p className="block-underline">{publisher}</p>
          </div>
        </div>
        <div className="block">
          <h4 className="block-headline">Role</h4>
          <p className="block-underline">{respons}</p>
        </div>
        <div className="cont-links">
          {github !== "" ? (
            <FontLink
              target="_blank"
              link={github}
              fontImage="fab fa-github"
              color="#333"
            />
          ) : null}
          <FontLink
            target="_blank"
            link={download}
            fontImage="fas fa-file-download"
            color="#2867b2"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
