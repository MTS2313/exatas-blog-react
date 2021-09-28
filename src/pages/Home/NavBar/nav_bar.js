import React from "react";

import ButtonLogo from "./Button_logo";
import LinksBar from "./links_bar";
import DarkButton from "./DarkButton";

import "./Styles/NavBarCss.css";
import BarData from "../../data/home/NavBarData"
function NavBar() {
  return (
    <>
      <ButtonLogo />
      <div className="nav_links_content">
        {BarData.map((i) => (
          <LinksBar link={i.link} name={i.name} style_links_class_name="aClassNav"/>
        ))}
        <DarkButton styleButtonDark="ButtonDark" button_text="Create Account" />
      </div>
    </>
  );
}

export default NavBar;
