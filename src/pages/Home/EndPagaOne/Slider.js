import React from "react";

import "./styles/Slider.css";
function Slider(props) {
  return (
    <>
      <div className="slider_content_end">
        <div className="img_div">
          <img src={props.backgroudImg} alt="" />
          <div className="info_content_end">
              <span className="end_span_text">
                <span className="text_title_end">
                    <h1>{props.title}</h1>
                    <div className="linha_end_dark"></div>
                </span>
                <span className="text_msg_end">
                    <span className="config_title_name">
                        <h3>{props.msg}</h3>
                        <p>{props.author}</p>
                    </span>
                </span>
              </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
