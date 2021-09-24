import React from "react";

function LinksBar(props) {
  return (
    <>
      <a className="aClassNav" href={props.link}>
        <h3>{props.name}</h3>
      </a>
    </>
  );
}

export default LinksBar;
