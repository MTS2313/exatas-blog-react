import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import NavBar from "./pages/Home/NavBar/nav_bar.js"
import MainPage from "./pages/Home/MainPage/index"


ReactDOM.render(
  <>
    <NavBar/>
  </>,
  document.getElementById("menubar")
);
ReactDOM.render(
  <>
  <MainPage/>
  </>,
document.getElementById("area_one")
);