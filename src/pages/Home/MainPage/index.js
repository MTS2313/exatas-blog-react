import React, { useState } from "react";
import InfoSlider from "./InfoSlider";

import Slider from "./Slider";

function MainPage() {
  let [indexSlider, setindexSlider] = useState(0);
  const mainA_1Data = [
    {
      imagem: "./img/SA1_1.jpg",
      title: "lorem 1",
      desc: "desc 1",
    },
    {
      imagem: "./img/SA1_2.jpg",
      title: "lorem 2",
      desc: "desc 2",
    },
    {
      imagem: "./img/SA1_3.jpg",
      title: "lorem 3",
      desc: "desc 3",
    },
  ];
  return (
    <>
      <InfoSlider />
      <Slider sliderIMG={mainA_1Data[indexSlider].imagem} />
      <div className="selector_slider_content">
        <div className="buttons_slider_content">
          <button
            className="Slider_selector_Btn"
            onClick={() => {
              if (indexSlider == 0) {
                return;
              } else {
                setindexSlider((indexSlider = 0));
              }
            }}
          >
            01
          </button>
          <button
            className="Slider_selector_Btn"
            onClick={() => {
              if (indexSlider == 1) {
                return;
              } else {
                setindexSlider((indexSlider = 1));
              }
            }}
          >
            02
          </button>
          <button
            className="Slider_selector_Btn"
            onClick={() => {
              if (indexSlider == 2) {
                return;
              } else {
                setindexSlider((indexSlider = 2));
              }
            }}
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
