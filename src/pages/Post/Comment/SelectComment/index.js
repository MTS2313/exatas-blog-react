import React from 'react'
import commentery_data from '../../../data/Post/PostCommenteryData'
import {HiOutlineArrowLeft} from "react-icons/hi"

import "./styles/styles.css"
function SelectComment(props) {
    var actualData = commentery_data[props.id]
    return (
        <>
        <div className="comment_open_content">
            <div className="modal_comment_open_bar_control">
                <button className="back_allcomment" onClick={props.btnBack}><HiOutlineArrowLeft className="btn_back_all_comment"/></button>
                <h2 className="title_modal_all_comment">Comment</h2>
                <div className="item_anonimo"></div>
            </div>
            <div className="comment_content">
                <div className="all_comment_primary">
                <div className="content_img_comment_openimg outhor_comment_img">
                    <img className="user_img" src={actualData.photo_user}/>
                </div>
                <div className="info_comment">
                    <h2 className="name_user_comment">{actualData.name_user}</h2>
                    <h3 className="comment_user">{actualData.commentery}</h3>
                <div className="btn_comment">
                    <button className="like_comment">Like</button>
                </div>
                </div>
                </div>
                {/* sec comment */}
                    {actualData.sub_commentery.map((i)=> 
                <div className="secund_comment_content">
                <div className="content_img_comment_openimg outhor_comment_img">
                    <img className="user_img" src={i.photo_user}/>
                </div>
                <div className="info_comment">
                    <h2 className="name_user_comment">{i.name_user}</h2>
                    <h3 className="comment_user">{i.commentery}</h3>
                    <button>Like</button>
                </div>
                </div>
                    )}
            </div>
        </div>   
        </>
    )
}

export default SelectComment
