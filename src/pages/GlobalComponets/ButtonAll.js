import React from "react";
import {HiOutlineArrowRight} from  "react-icons/hi"

import "./GlobalStyles/ButtonAllStyle.css"
function ButtonAll(props) {
  return (
    <div className="ButtonAll">
      <button  className={props.ComponetClass}>
        <a href={props.ButtonLink}>
          <h2>{props.ButtonText}</h2>
          <HiOutlineArrowRight className={props.iconArStyle}/>
        </a>
      </button>
    </div>
  );
}

export default ButtonAll;
