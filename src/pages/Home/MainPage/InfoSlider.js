import React from "react";

import ButtonAll from "../../GlobalComponets/ButtonAll";
import "./Styles/InfoSlider.css";

function InfoSlider(props) {
  return (
    <div className="desc_text_slider">
      <div className={props.animation +" info_controlls"}>
        <h2>{props.TitleMainSlider}</h2>
        <p className="p_animation">
          {props.DescMainSlider}
        </p>
        <div className="Buttons_A1_Control">
          <ButtonAll
            ComponetClass="SliderMainPageBlack-A1"
            ButtonLink="#"
            ButtonText="Read Articles"
          />
          <ButtonAll
            ComponetClass="SliderMainPageTransparent-A1"
            ButtonLink="#"
            ButtonText="Access blog"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoSlider;
