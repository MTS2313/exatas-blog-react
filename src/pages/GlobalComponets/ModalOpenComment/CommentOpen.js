import React from "react";

import { IoIosClose } from "react-icons/io";
import {MdSend} from "react-icons/md"
function CommentOpenModal(props) {
  return (
    <>
      <div className="start_bar">
        <button className="close_modal_class" onClick={props.modalClose}>
          <IoIosClose className="icon_close_svg" />
        </button>
        <h3 className="title_modal_content">Comments</h3>
      </div>
      <div className="all_comment_content">
        <div className="commentOpen">
          <div className="primary_comment_open">
            <div className="img_comment_content">
              <img src="" className="img_comment_open" />
            </div>
            <div className="content_comment_text">
              <h2 className="name_author_of_comment_open"></h2>
              <h4 className="comment_open_desc_text"></h4>
            </div>
            <div className="comment_open_react_btn">
              <button className="like_comment_open"></button>
            </div>
          </div>
          <div className="sub_comment_open">
            <div className="sub_comment_img_author">
              <img src="" className="img_comment_open" />
            </div>
            <div className="content_comment_text">
              <h2 className="name_author_of_comment_open"></h2>
              <h4 className="comment_open_desc_text"></h4>
            </div>
            <div className="comment_open_react_btn">
              <button className="like_comment_open"></button>
            </div>
          </div>
        </div>
      </div>
      <div className="imput_comment_content">
        <input
          type="text"
          className="input_comment"
          placeholder="Write a comment:"
        />
        <MdSend className="svg_imput_icon_comment" />
      </div>
    </>
  );
}

export default CommentOpenModal;
