import React from 'react'

import "./style/Categoria.css"
import categoriesArray from '../../data/Blog/DataCategories'

function Categorias(props) {
    return (
        <div className={props.Categories_content}>
            <h3>Categories</h3>
            <div className="categ_line_div"></div>
            <ul>
                 </ul>
        </div>
    )
}

export default Categorias
