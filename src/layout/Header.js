import React from "react";

export default function Header(props) {
  const { branding } = props;
  return (
    <div className="header">
      <a href="/" className="home">
        {branding}
      </a>
    </div>
  );
}
