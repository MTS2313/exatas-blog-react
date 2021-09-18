import React from "react";

import ButtonLogo from "./Button_logo";
import LinksBar from "./links_bar";
import DarkButton from "./DarkButton";

import "./Styles/NavBarCss.css";

function NavBar() {
  const BarData = [
    {
      link: "#",
      name: "Home",
    },
    {
      link:"#",
      name:"Blog"
    },
    {
      link:"#",
      name:"Categories"
    },
    
  ];
  return (
    <>
      <ButtonLogo />
      <div className="nav_links_content">
        {BarData.map((i) => (
          <LinksBar link={i.link} name={i.name} />
        ))}
        <DarkButton button_text="Create Account" />
      </div>
    </>
  );
}

export default NavBar;
