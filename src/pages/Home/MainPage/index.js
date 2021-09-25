import React, { useState } from "react";
import InfoSlider from "./InfoSlider";

import Slider from "./Slider";
import "./Styles/index.css";

import mainA_1Data from "../../data/home/MainSliderA1.js"


function MainPage() {
  let [indexSlider, setindexSlider] = useState(0);
  var [animation, setAnimation] = useState(null);
  // ------------------------------------
  function slideBtnDisable(condition){
    const btns = document.querySelectorAll(".buttons_slider_content button");
    switch(condition){
      case "yes":
        btns.forEach(btn => {
          btn.disabled = true;
        });
      break;
      case "no":
        btns.forEach(btn => {
          btn.disabled = false;
        });
        break;
    }
  }
  // ------------------------------------
  function setAnimationSlide(index){
    if (indexSlider == index) {
      return;
    } else {
      slideBtnDisable("yes");
      setAnimation((animation = "control_animation"));
      setindexSlider((indexSlider = index));
      setTimeout(() => setAnimation(()=>{
        slideBtnDisable("no");
        animation = null;
      }), 1000);
    }
  }
  return (
    <>
      <div className="control_animation">
        <InfoSlider
          animation={animation}
          TitleMainSlider={mainA_1Data[indexSlider].title}
          DescMainSlider={mainA_1Data[indexSlider].desc}
        />
        <Slider
          animation={animation}
          sliderIMG={mainA_1Data[indexSlider].imagem}
        />
      </div>
      <div className="selector_slider_content">
        <div className="buttons_slider_content">
          <button
            id="btn" className="color_option_slider"
            onClick={() => setAnimationSlide(0)}
          >
            01
          </button>
          <button 
            id="btn" className="color_option_slider"
            onClick={() => setAnimationSlide(1)}
          >
            02
          </button>
          <button
            id="btn" className="color_option_slider"
            onClick={() => setAnimationSlide(2)}
          >
            03
          </button>
        </div>
        <div className="linha_button"></div>
      </div>
    </>
  );
}

export default MainPage;