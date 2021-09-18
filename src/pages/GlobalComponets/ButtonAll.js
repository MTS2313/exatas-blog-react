import React from "react";

import "./GlobalStyles/ButtonAllStyle.css"
function ButtonAll(props) {
  return (
    <div className="ButtonAll">
      <button  className={props.ComponetClass}>
        <a href={props.ButtonLink}>
          <h2>{props.ButtonText}</h2>
          <svg
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 0L11.59 1.41L16.17 6H0V8H16.17L11.58 12.59L13 14L20 7L13 0Z"
              fill="black"
            />
          </svg>
        </a>
      </button>
    </div>
  );
}

export default ButtonAll;