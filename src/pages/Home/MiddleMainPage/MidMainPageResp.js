import React from 'react'
import "./Styles/MidMainPageResp.css"
import RecentData from '../../data/home/MidPageData'
import CompMainMidPage from './CompMainMidPage'
function MidMainPageResp() {
    return (
        <>
        <div>
            {RecentData.map((_i, index) => {return <CompMainMidPage image_post={RecentData[index].img} title_mid_page_post={RecentData[index].title} desc_mid_page_text={RecentData[index].desc } />})}
        </div>
        </>
    )
}

export default MidMainPageResp
