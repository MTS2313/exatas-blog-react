import React, {useState}from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaReddit,
  FaGithub,
} from "react-icons/fa";

import "./Post.css";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Slider from "./SliderFromPostPage/Slider";

import authot_data from "../data/Post/PostAuthotData";
import BarEnd from "../GlobalComponets/EndBar";
import Modal from "../GlobalComponets/Modal/modal";
import PostItemData from "../data/Post/PostTextData";
function Post(props) {
  var [modalState, setmodalState] = useState(false)
  let likes_qnt = 100;
  let comment_qnt = 40;
  let share_qnt = 79;
  return (
    <>
    {modalState ? <Modal modalClose={()=>setmodalState(modalState = false)}/> :null}
      <div className="main_to_post_all_content">
        <div className="nav_bar_to_post_back_btn">
          <a className="link_to_post_back_btn" href="/">
            <button className="btn_from_link_to_post">
              <HiOutlineArrowLeft className="icon_btn_back_link" />
              <h3>LOREN IPSUM DOLOR SIT AMET CONSECTETUR</h3>
            </button>
          </a>
        </div>
        <div className="title_and_descPreview_to_post">
          <h1 className="title_to_post">
            Lorem ipsum dolor sit amet, consectetur{" "}
          </h1>
          <p className="desc_to_post">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae eleifend lorem.{" "}
          </p>
        </div>
        <div className="slider_content_post">
          <Slider onClick={()=> setmodalState(modalState = true)}/>
        </div>
        <div className="post_contet_info">
          <div className="social_media_content_status">
            <span className="media_social_qnt_status">
              <h4 className="media_social_qnt_status_h5">{likes_qnt} Likes</h4>
            </span>
            <span className="media_social_qnt_status">
              <h4 className="media_social_qnt_status_h5">
                {comment_qnt} comments
              </h4>
            </span>
            <span className="media_social_qnt_status">
              <h4 className="media_social_qnt_status_h5">{share_qnt} shares</h4>
            </span>
          </div>
          <div className="author_content_infos">
            <div className="authot_data">
              <div className="imagem_author_profile">
                <img
                  src="http://ii-dd.com/wp-content/uploads/2020/02/default-user.png"
                  alt="user imagem"
                  className="author_photo"
                />
              </div>
              <div className="info_profile_author">
                <h3 className="name_author">Maria Das Dores</h3>
                <h6 className="profile_data_info">Set,10,2002-6:30AM</h6>
              </div>
            </div>
            <div className="social_media_links_author">
              <a
                href={authot_data.facebook}
                className="link_social_media_to_author"
              >
                <button className="btn_link_social_media_author">
                  <span className="svg_social_media">
                    <FaFacebook />
                  </span>
                </button>
              </a>
              <a
                href={authot_data.instagram}
                className="link_social_media_to_author"
              >
                <button className="btn_link_social_media_author">
                  <span className="svg_social_media">
                    <FaInstagram />
                  </span>
                </button>
              </a>
              <a
                href={authot_data.twitter}
                className="link_social_media_to_author"
              >
                <button className="btn_link_social_media_author">
                  <span className="svg_social_media">
                    <FaTwitter />
                  </span>
                </button>
              </a>
              <a
                href={authot_data.reddit}
                className="link_social_media_to_author"
              >
                <button className="btn_link_social_media_author">
                  <span className="svg_social_media">
                    <FaReddit />
                  </span>
                </button>
              </a>
              <a href={authot_data.git} className="link_social_media_to_author">
                <button className="btn_link_social_media_author">
                  <span className="svg_social_media">
                    <FaGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="post_text_contet_all">
            {PostItemData}
          </div>
        </div>
      </div>
          <section className="page_rodape">
            <BarEnd/>
          </section>
    </>
  );
}

export default Post;
