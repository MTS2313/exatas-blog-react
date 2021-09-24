import React, { useState } from "react";
import Slider from "./Slider";
import SliderDataEndPage from "../../data/home/SliderEndPage";

function EndPageAreaOne() {
  var [indexTroca, setindexTroca] = useState(0);
  function SelectIndex(newIndex) {
    setindexTroca((indexTroca = newIndex));
  }
  return (
    <>
      <Slider
        backgroudImg={SliderDataEndPage[indexTroca].SliderImagem}
        title={SliderDataEndPage[indexTroca].title}
        msg={SliderDataEndPage[indexTroca].text}
        author={SliderDataEndPage[indexTroca].author}
      />
      <div className="selector_end">
      <div className="content">
        <span className="config_buttons">
          <button onClick={() => SelectIndex(0)}>
            <h2>01</h2>
          </button>
          <button onClick={() => SelectIndex(1)}>
            <h2>02</h2>
          </button>
          <button onClick={() => SelectIndex(2)}>
            <h2>03</h2>
          </button>
        </span>
        <div className="linha_btn_end"></div>
        <span className="btn_end_go">
            <button><h2>Go Next</h2>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 0L11.59 1.41L16.17 6H0V8H16.17L11.58 12.59L13 14L20 7L13 0Z" fill="white"/>
</svg>
</button>
        </span>
      </div>
      </div>
    </>
  );
}

export default EndPageAreaOne;
