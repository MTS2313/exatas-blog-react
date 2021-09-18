import React from 'react'
import InfoSlider from './InfoSlider'
import SliderSelector from './SliderSelector'

import Slider from './Slider'

function MainPage() {
    const mainA_1Data = [
    {
        imagem:"./img/SA1_1.jpg",
        title:"lorem 1",
        desc:"desc 1"
    },
    {
        imagem:"./img/SA1_2.jpg",
        title:"lorem 2",
        desc:"desc 2"
    },
    {
        imagem:"./img/SA1_3.jpg",
        title:"lorem 3",
        desc:"desc 3"
    },
]
    return (
        <>
            <InfoSlider/>
            <Slider sliderIMG={}/>
            <SliderSelector/>
        </>
    )
}

export default MainPage
