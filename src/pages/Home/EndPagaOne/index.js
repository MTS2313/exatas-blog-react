import React from 'react'

import Slider from "./Slider";
import SliderDataEndPage from '../../data/home/SliderEndPage'
import SliderInfo from './SliderInfoProps';


function EndPageOne() {
    var indexActual = 0;
    return (
        <div className="SliderContentMain">
            <Slider SliderImagem={SliderDataEndPage[indexActual].SliderImagem}/>
            <SliderInfo/>
        </div>
    )
}

export default EndPageOne
