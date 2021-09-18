import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MiddleMain from "./pages/Home/MiddleMainPage/middleMainPage";

import NavBar from "./pages/Home/NavBar/nav_bar.js"


ReactDOM.render(
  <>
    <NavBar/>
    
  </>,
  document.getElementById("menubar")
);
ReactDOM.render(
  <>
  <MiddleMain/>
  </>,
document.getElementById("area_one")

);