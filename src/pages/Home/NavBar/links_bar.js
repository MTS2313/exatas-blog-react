import React from "react";

function LinksBar(props) {
  return (
    <>
      <a className={props.style_links_class_name} href={props.link}>
        <h3>{props.name}</h3>
      </a>
    </>
  );
}

export default LinksBar;
