import React from 'react'

import ButtonAll from '../../GlobalComponets/ButtonAll'
import "./Styles/InfoSlider.css"

function InfoSlider() {
    return (
        <div className="desc_text_slider">
            <h2>Lorem ipsum dolor sit amet consectetur, adipisic</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati unde delectus officia quidem itaque rem laudantium sunt neque suscipit molestias fuga, dolore optio, et placeat mollitia, nesciunt ut quasi iusto!</p>
            <div className="Buttons_A1_Control">
            <ButtonAll ComponetClass="SliderMainPageBlack-A1" ButtonLink="#" ButtonText="Read Articles"/>
            <ButtonAll ComponetClass="SliderMainPageTransparent-A1" ButtonLink="#" ButtonText="Access blog"/>
            </div>
        </div>
    )
}

export default InfoSlider
