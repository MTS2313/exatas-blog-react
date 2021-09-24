import React from "react";

import "./styles/LoginForgot.css";

import NavBar from "../Home/NavBar/nav_bar";
import EmailRequest from "./Taps/EmailRequest";
function LoginForgot() {
  return (
    <>
      <section className="Login_Forgot">
        <header id="menubar">
          <NavBar />
        </header>
        <EmailRequest />
      </section>
    </>
  );
}

export default LoginForgot;
