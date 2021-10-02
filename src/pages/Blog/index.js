import React from "react";
import BarEnd from "../GlobalComponets/EndBar";
import NavBar from "../Home/NavBar/nav_bar";
import NavResp from "../Home/nav_resp";
import BlogMsgad from "./BlogMsgad";
import BlogSearch from "./BlogSearch";
import "./index.css"
import UserSelectPosts from "./MemberPost";
import UserSelectTopPosts from "./TopPost";
import AllPostsContent from "./AllPosts";

function index() {
  return (
    <>
      <header id="menubar">
        <NavBar />
      </header>
      <header id="respmenubar">
        <NavResp router="home" />
      </header>
      <section id="BlogSearch_sec">
        <BlogSearch/>
      </section>
      <section id="Posts_sec">
        <UserSelectPosts/>
        <UserSelectTopPosts/>
      </section>
      <BlogMsgad/>
      <section id="post_all_sec">
      <AllPostsContent/>
      </section>
      <section className="page_rodape">
        <BarEnd />
      </section>
    </>
  );
}

export default index;
