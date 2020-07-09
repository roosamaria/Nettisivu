import React from "react";

export default function Blog(props) {
  const { title, image, description, openFunc, id } = props;
  return (
    <li className="item" onClick={() => openFunc(id)}>
      <p className="clickable otsikko">{title}</p>
      <div className="blogilinkki">
        {" "}
        <img className="blogikuva" src={image} alt="blockimage" />
        <p className="clickable indent">{description}</p>
      </div>
    </li>
  );
}
