import React from 'react'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import "./Styles/MidMainPageResp.css"

function CompMainMidPage(props) {
    return (
        <div className="MidMain_content_posts">
            <img src={props.image_post}/>
            <div className="info_resp_Mid_page">
                <h2>{props.title_mid_page_post}</h2>
                <p>{props.desc_mid_page_text}</p>
                <div className="linha_mid_main_resp"></div>
                <a href="#" className="MidMain_btn_resp">
                    <button>
                        <h2>Access</h2>
                        <HiOutlineArrowNarrowRight/>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default CompMainMidPage
