import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import "./index.css";

// import NavBar from "./pages/Home/NavBar/nav_bar.js"
// import MainPage from "./pages/Home/MainPage/index"
// import MiddleMain from "./pages/Home/MiddleMainPage/middleMainPage"
// import EndPageOne from "./pages/Home/EndPagaOne/index"

import Routes from "./router"



ReactDOM.render(
  <>
  <Routes/>
  </>,
  document.getElementById("main")
)
