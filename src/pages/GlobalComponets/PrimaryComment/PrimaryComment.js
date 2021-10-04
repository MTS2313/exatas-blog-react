import React from 'react'
import commentery_data from '../../data/Post/PostCommenteryData'
import { IoIosClose } from "react-icons/io";
import {MdSend} from "react-icons/md"
import ".././Modal/modal.css"

function PrimaryComment(props) {
    return (
        <>
            <div className="start_bar">
        <button className="close_modal_class" onClick={props.modalClose}>
          <IoIosClose className="icon_close_svg" />
        </button>
        <h3 className="title_modal_content">Comments</h3>
          </div>
            {commentery_data.map((i,index) => (
              <div className="comment_primary_content">
                <div className="comment_control_style" >
                  <div className="photo_div_content">
                    <img src={i.photo_user} className="profile_img" />
                  </div>
                  <div className="info_comment_div_content">
                    <h2 className="profile_name">{i.name_user}</h2>
                    <h5 className="comment_text">{i.commentery}</h5>
                    <div className="btn_content_comment">
                      <button className="btn_comment_item comment_like">
                        Like
                      </button>
                      <div className="bolinha_do_gustavo"></div>
                      <button className="btn_comment_item new_sub_comment">
                        Responder
                      </button>
                    </div>
                  </div>
                </div>
                <div className="subcomment_content_all">
                  {i.sub_commentery.map((i) => (
                    <div className="subcomment_contet">
                      <div className="subcomment_content_img">
                        <img src={i.photo_user} className="subcomment_imagem" />
                      </div>
                      <div className="info_content_div">
                        <h2 className="sub_profile_name">{i.name_user}</h2>
                        <h5 className="sub_comment_text">{i.commentery}</h5>
                        <div className="sub_btn_content">
                          <button className="sub_btn_like">Like</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </>
    )
}

export default PrimaryComment
