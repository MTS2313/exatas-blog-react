import React from 'react'
import Categorias from '../../GlobalComponets/Categorias/Categorias'

import "./styles/TopNews.css"
function TopNews() {
    return (
        <>  <h2>Top News</h2>
            <div className="content_top_posts">
                <div className="top_news_categories">
                    <Categorias arryGlobal="categoriesArray"/>
                </div>
                <div className="post_topNews"></div>
            </div>
        </>
    )
}

export default TopNews
