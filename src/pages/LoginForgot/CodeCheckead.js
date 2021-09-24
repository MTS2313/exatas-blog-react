import React from "react";
import CheckeadCode from "./Taps/CheckeadCode";
import NavBar from "../Home/NavBar/nav_bar"

import "./styles/CodeCheckead.css"

function CodeCheckead() {
  return (
    <div>
      <section className="code_checkead_section">
        <header id="menubar">
          <NavBar />
        </header>
        <CheckeadCode />
      </section>
    </div>
  );
}

export default CodeCheckead;
