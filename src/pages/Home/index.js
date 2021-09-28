import React from "react";

import NavBar from "./NavBar/nav_bar";
import MainPage from "./MainPage";
import MiddleMain from "./MiddleMainPage/middleMainPage";
import EndPageAreaOne from "./EndPagaOne";
import WeAbout from "./WeAbout";
import AccBlog from "./AccessBlog";
import "./AccessBlog/Styles/AccBlog.css";
import BarEnd from "../GlobalComponets/EndBar";
import NavResp from "./nav_resp";
import MidMainPageResp from "./MiddleMainPage/MidMainPageResp";
import RespEndPageOne from "./EndPagaOne/Resp";

function Home() {
  return (
    <>
      <header id="menubar">
        <NavBar />
      </header>
      <header id="respmenubar">
        <NavResp router="home" />
      </header>
      <section id="area_one">
        <MainPage />
      </section>
      <section id="area_duo">
        <MiddleMain />
      </section>
      <section id="area_duo_resp">
        <MidMainPageResp />
      </section>
      <section id="area_three">
        <EndPageAreaOne />
      </section>
      <section id="area_three_resp">
        <RespEndPageOne />
      </section>
      <section className="about_style">
        <WeAbout />
      </section>
      <section className="acc_blog_sect">
        <AccBlog />
      </section>
      <section className="page_rodape">
        <BarEnd />
      </section>
    </>
  );
}

export default Home;
