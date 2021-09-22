import React from 'react'

import "./styles/Slider.css"




function Slider(props) {
    return (
        <>
        <div className="SliderContent">
            <img className="SliderImg" src={props.SliderImagem} alt="" />
        </div>

        </>
    )
}

export default Slider
