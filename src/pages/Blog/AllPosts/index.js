import React from 'react'
import "./style/AllPosts.css"
import  AllPosts from "../../GlobalComponets/AllPosts/index"
import DarkButton from '../../Home/NavBar/DarkButton'
import { FiPlus } from 'react-icons/fi'
import categoriesArray from '../../data/Blog/DataCategories'
function AllPostsContent() {
    return (
        <>
           <h2>ALL POSTS</h2>
            <div className="content_allpost">
                <div className="allpost_categoria_content">
        <DarkButton button_text="CREATE"  svg={<FiPlus/>} styleButtonDark="CreateBlogPost"/>
                    <h1>Categories</h1>
                    <div className="allpost_content_categorie"></div>
                    <ul className="ul_categorie">
                    {categoriesArray.map((i)=>
                    <a className="a_categorie" href={i.link_categorie}>
                    <li className="categorie_tags_allpost">{i.nome_categoria}</li>
                    </a>
                    )}
                    </ul>
                </div>
                <div className="allposts_content">
                    <AllPosts/>
                </div>
            </div> 
        </>
    )
}

export default AllPostsContent
