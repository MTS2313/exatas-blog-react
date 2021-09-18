import React from 'react'

import "./Styles/Slider.css"

function Slider(props) {
    return (
        <div className="sliderMainConfig">
            <div className="imgA-1">
                <img src={props.sliderIMG} alt="" />
            </div>
        </div>
    )
}

export default Slider
