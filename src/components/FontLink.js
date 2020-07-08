import React from "react";

export default function FontLink(props) {
  const { target, link, fontImage, color } = props;
  return (
    <div className="font-image-area">
      <a target={target} rel="noopener noreferrer" href={link}>
        <i
          style={{ color: color }}
          className={`circle font-image ${fontImage}`}
        ></i>
      </a>
    </div>
  );
}
