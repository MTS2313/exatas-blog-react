import React from 'react'
import {HiOutlineArrowRight} from "react-icons/hi"

import "./styles/BlogMsgad.css"
import post_msg_ad from "../../data/Blog/postmsgad"
function BlogMsgad() {
    console.log(post_msg_ad)
    return (
        <>
            <div className="img_content_postBlog_center" style={{backgroundImage: "url(" + post_msg_ad[0].Image + ")"}}>
                <div className="post_msg_ad_content">
                    <div className="sup_title_contet_blog_msg spans_blogmsg">
                        <h6 className="sup_title_blogmsg">{post_msg_ad[0].suptitle}</h6>
                    </div>
                    <div className="title_content_blog_msg spans_blogmsg">
                        <h1 className="title_blogmsg">{post_msg_ad[0].title}</h1>
                    </div>
                    <div className="tags_content_blog_msg">
                        <ul className="tag_blogmsg">{post_msg_ad.map((i)=> 
                        (i.tags.map((i)=> <li className="allTag_blog_msg">{i}</li>))
                        )}</ul>
                    </div>
                    <div className="desc_content_blog_msg spans_blogmsg">
                        <p className="blogmsg_desc">{post_msg_ad[0].desc}</p>
                    </div>
                    <div className="button_link_content_blog_msg spans_blogmsg">
                        <a href={post_msg_ad[0].link} className="link_class_">
                            <button className="btn_blogmsg">
                                <h2 className="h2_btn_blogmsg">READ</h2>
                                <HiOutlineArrowRight className="svg_blogmsg"/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogMsgad
