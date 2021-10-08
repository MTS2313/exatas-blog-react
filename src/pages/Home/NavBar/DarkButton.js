import React from "react";

import "./Styles//DarkButtonCss.css";

function DarkButton(props) {
  return (
    <>
      <a href={props.darkbuttonlink}>
        <button
        form={props.form}
          onClick={props.DarkButtonActiveClick}
          className={props.styleButtonDark}
        >
          <h2>{props.button_text}</h2>
          <span>{props.svg}</span>
        </button>
      </a>
    </>
  );
}

export default DarkButton;
