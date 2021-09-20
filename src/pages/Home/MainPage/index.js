import React, { useState } from "react";
import InfoSlider from "./InfoSlider";

import Slider from "./Slider";
import "./Styles/index.css";

function MainPage() {
  let [indexSlider, setindexSlider] = useState(0);
  var [animation, setAnimation] = useState(null);
  const mainA_1Data = [
    {
      imagem: "./img/SA1_1.jpg",
      title: "lorem 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam, curabitur porta venenatis nec a lacinia. Mi class efficitur scelerisque quisque conubia per sapien luctus nam, tellus imperdiet feugiat pellentesque dictumst fusce enim faucibus sit, ullamcorper viverra tempor dui morbi tristique donec volutpat. Vel molestie sapien per dis vivamus neque morbi cursus nibh ad maecenas, facilisi pulvinar feugiat turpis venenatis gravida risus odio magnis in, mattis parturient netus donec metus suspendisse fusce magna dignissim nisi. Finibus leo augue feugiat efficitur turpis congue dictum nostra purus diam, dictumst gravida ligula orci volutpat condimentum at eros dignissim, arcu class sed elementum netus commodo viverra quisque eleifend",
    },
    {
      imagem: "./img/SA1_2.jpg",
      title: "lorem 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam, curabitur porta venenatis nec a lacinia. Mi class efficitur scelerisque quisque conubia per sapien luctus nam, tellus imperdiet feugiat pellentesque dictumst fusce enim faucibus sit, ullamcorper viverra tempor dui morbi tristique donec volutpat. Vel molestie sapien per dis vivamus neque morbi cursus nibh ad maecenas, facilisi pulvinar feugiat turpis venenatis gravida risus odio magnis in, mattis parturient netus donec metus suspendisse fusce magna dignissim nisi. Finibus leo augue feugiat efficitur turpis congue dictum nostra purus diam, dictumst gravida ligula orci volutpat condimentum at eros dignissim, arcu class sed elementum netus commodo viverra quisque eleifend",
    },
    {
      imagem: "./img/SA1_3.jpg",
      title: "lorem 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam, curabitur porta venenatis nec a lacinia. Mi class efficitur scelerisque quisque conubia per sapien luctus nam, tellus imperdiet feugiat pellentesque dictumst fusce enim faucibus sit, ullamcorper viverra tempor dui morbi tristique donec volutpat. Vel molestie sapien per dis vivamus neque morbi cursus nibh ad maecenas, facilisi pulvinar feugiat turpis venenatis gravida risus odio magnis in, mattis parturient netus donec metus suspendisse fusce magna dignissim nisi. Finibus leo augue feugiat efficitur turpis congue dictum nostra purus diam, dictumst gravida ligula orci volutpat condimentum at eros dignissim, arcu class sed elementum netus commodo viverra quisque eleifend",
    },
  ];
  function btn_On_off(on, off) {
    if (on) {
      document.getElementById("btn").disabled = false;
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
            id="btn"
            onClick={() => {
              if (indexSlider == 0) {
                return;
              } else {
                setAnimation((animation = "control_animation"));
                btn_On_off(true);
                setindexSlider((indexSlider = 0));
                setTimeout(() => setAnimation((animation = null)), 2000);
              }
            }}
          >
            01
          </button>
          <button
            id="btn"
            onClick={() => {
              if (indexSlider == 1) {
                return;
              } else {
                setAnimation((animation = "control_animation"));
                setindexSlider((indexSlider = 1));
                setTimeout(() => setAnimation((animation = null)), 2000);
              }
            }}
          >
            02
          </button>
          <button
            id="btn"
            onClick={() => {
              if (indexSlider == 2) {
                return;
              } else {
                setAnimation((animation = "control_animation"));
                setindexSlider((indexSlider = 2));
                setTimeout(() => setAnimation((animation = null)), 2000);
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
