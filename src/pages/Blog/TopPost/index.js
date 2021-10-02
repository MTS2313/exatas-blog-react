import React from 'react'
import DarkButton from "../../Home/NavBar/DarkButton"
import "./styles/TopPosts.css"
import {FiPlus} from "react-icons/fi"
import categoriesArray from '../../data/Blog/DataCategories'
import PostPreviewTopPost from '../../GlobalComponets/post_preview_top_post'
function UserSelectTopPosts() {
    return (
        <>  
        <h2>TOP POST</h2>
            <div className="content_for_user_posts">
                <div className="for_user_posts_categories">
        <DarkButton button_text="CREATE"  svg={<FiPlus/>} styleButtonDark="CreateBlogPost"/>
                    <h1>Categories</h1>
                    <div className="linha_categoria_from_user_posts"></div>
                    <ul>
                    {categoriesArray.map((i)=>
                    <a href={i.link_categorie}>
                    <li className="user_categorie_list_itens">{i.nome_categoria}</li>
                    </a>
                    )}
                    </ul>
                </div>
                <div className="user_posts">
                    <PostPreviewTopPost/>
                </div>
            </div>
        </>
    )
}

export default UserSelectTopPosts
