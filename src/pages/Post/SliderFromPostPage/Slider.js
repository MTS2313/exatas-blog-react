import React, { useState } from "react";
import {AiFillHeart, AiOutlineHeart, AiOutlineShareAlt} from "react-icons/ai"
import {RiChat4Line} from "react-icons/ri"
import post_img  from "../../data/Post/PostSliderData"

import "./styles/SliderFromPost.css";
function Slider(props) {
    var like_state = false;
    let i_slider_atual = 1;
    let [Index_like, setIndex_like] = useState(1);
    const like_data = [
        {
            icon:<AiFillHeart className="like_icon_for_liked btn_bar_post_react_icon" id="icon_like"/>
        },
        {
            icon:<AiOutlineHeart className="like_icon_for_liked btn_bar_post_react_icon" id="icon_like"/>
        }
    ]
    function like_control(){
        if(like_state === false){
            setIndex_like(Index_like = 0)
            like_state = true;
            return
        }
        else if(like_state === true){
            setIndex_like(Index_like = 1)
            like_state = false;
            return
        }
    }
    function  next_slider(Slider_select){
        if(Slider_select !== i_slider_atual){
          if(Slider_select === 1){
            document.getElementById("slider_control").style.marginLeft = "0%"
            i_slider_atual = Slider_select;
          }
          if(Slider_select === 2){
            
            document.getElementById("slider_control").style.marginLeft = "-100%"
            i_slider_atual = Slider_select;
          }
          if(Slider_select === 3){
            
            document.getElementById("slider_control").style.marginLeft = "-200%"
            i_slider_atual = Slider_select;
          }
        }
      }
      return (
        <>
      <div className="slider_post_content_all">
        <div className="slider_img_post it1" id="slider_control" 
        style={
          {backgroundImage: "url("+post_img[0].imagem+")"}
        }
        ></div>
        <div className="slider_img_post it2"
        style={
          {backgroundImage: "url("+post_img[1].imagem+")"}
        }></div>
        <div className="slider_img_post it3"
        style={
          {backgroundImage: "url("+post_img[2].imagem+")"}
        }></div>
        <div className="box_post_inter">
          <div className="like_content_post">
            <button className="btn_control_for_like" onClick={()=>like_control()}>
                {like_data[Index_like].icon}
              <h5 className="like_text_btn_for_liked btn_bar_post_react_text">
                Like
              </h5>
            </button>
          </div>
          <div className="comment_content_post">
              <button className="btn_comment_post" onClick={props.onClick}>
            <RiChat4Line className="comment_icon"/>
            <h5 className="comment_text_post">Comment</h5>
              </button>
          </div>
          <div className="share_content_post">
              <button className="btn_share_post">

              <AiOutlineShareAlt className="share_icon_content"/>
              <h5 className="share_text_post">Share</h5>
              </button>
            </div>  
        </div>
      </div>
      <div className="select_content_post_option">
        <div className="linha_post_option_view_item">
          <div className="option_of_index_slider_post_select">
            <button className="btn_select_slider_option" onClick={()=> next_slider(1)}>
              <h3 className="btn_post_select_content_number">01</h3>
            </button>
            <button className="btn_select_slider_option" onClick={()=> next_slider(2)}>
              <h3 className="btn_post_select_content_number">02</h3>
            </button>
            <button className="btn_select_slider_option" onClick={()=> next_slider(3)}>
              <h3 className="btn_post_select_content_number">03</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
