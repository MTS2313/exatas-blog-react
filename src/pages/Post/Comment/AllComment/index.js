import React from "react";

import "./styles/styles.css";

import commentery_data from "../../../data/Post/PostCommenteryData";
function AllComment(props) {
  return (
    <>
      <div className="comment_bar_close_and_title">
        <div className="title_comment_bar">
          <h1 className="h1_title_bar_text_comment">Comment</h1>
        </div>
        <div className="close_btn_content">
          <button className="btn_close_icon" onClick={props.onCloselevalOne}>
            Close
          </button>
        </div>
      </div>
      <div className="comment_list_content">
        <div className="comment_list">
          {commentery_data.map((i, index) => (
            <div className="main_comment_content" onClick={()=>props.getIndex(index)}>
              <div className="comment_main_content">
                <div className="commet_d">
                  <div className="display_flex_content">
                  <div className="img_comment_div">
                    <img className="img_comment" src={i.photo_user} />
                  </div>
                  <div className="text_info_coment">
                    <h2 className="title_name">{i.name_user}</h2>
                    <h4 className="comment">{i.commentery}</h4>
                  </div>
                  </div>
                  <div className="btn_option_div">
                    <button className="comment_btn">Like</button>
                    <button className="comment_btn">Responder</button>
                  </div>
                </div>

                {/* acima vai o comentario pai */}
                <div className="comment_sub_content"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllComment;
