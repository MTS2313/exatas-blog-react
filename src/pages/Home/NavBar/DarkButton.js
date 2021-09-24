import React from "react";

import "./Styles//DarkButtonCss.css";

function DarkButton(props) {
  return (
    <>
      <a href={props.darkbuttonlink}>
        <button
          onClick={props.DarkButtonActiveClick}
          className={props.styleButtonDark}
        >
          <h2>{props.button_text}</h2>
        </button>
      </a>
    </>
  );
}

export default DarkButton;
