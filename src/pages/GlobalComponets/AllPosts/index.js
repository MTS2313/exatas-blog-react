import React from 'react'
import{AiOutlineArrowRight} from "react-icons/ai"
import DataBlogAllPosts from "../../data/Blog/DataBlogAllPosts"
import "./styles/AllPosts.css"

function AllPosts() {
    return (
        <>

       {DataBlogAllPosts.map((i)=> 
       
            <div className="post_for_all_content">
                <span className="post_for_all_imagem">
                <img src={i.imagem}/>
                </span>
                <span className="post__for_all_info">
                    <ul className="tag_all_ul">{i.categorie.map(categoria => (<li><p className="p_tag_class">{categoria}</p></li>))}</ul>
                    <h1>{i.title}</h1>
                    <h4>{i.desc}</h4>
                </span>

                <span className="post_for_all_link">
                    <a className="post_link" href={i.link}>
                        <button className="post_link_button">
                            <h3>Read</h3>
                            <AiOutlineArrowRight/>
                        </button>
                    </a>
                </span>
            </div>            
        )}
        </>
    )
}

export default AllPosts
