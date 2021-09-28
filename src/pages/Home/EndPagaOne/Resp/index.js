import React, {useState} from 'react'
import SliderDataEndPage from '../../../data/home/SliderEndPage'
import "../styles/EndPageResp.css"
import {FiArrowLeft, FiArrowRight} from "react-icons/fi"
function RespEndPageOne() {
    let [indexRespSlider, setindexRespSlider] = useState(0)
    function RespTrocaSliderSlider(unidadeDTroca){

        if(unidadeDTroca == -1){
            setindexRespSlider((indexRespSlider -1) < 0 ? 2 : indexRespSlider - 1);
        }
        else{
            setindexRespSlider((indexRespSlider + 1) > 2 ? 0 : indexRespSlider + 1);
        }
    }
    return (
        <>
            <div className="slider_end_page_resp">
                <img src={SliderDataEndPage[indexRespSlider].SliderImagem}/>
                <div className="info_end_page_resp">
                    <h1>{SliderDataEndPage[indexRespSlider].title}</h1>
                    <span className="line_content_end_resp"><div className="end_line_tile_resp"></div></span>
                    <span className="info_resp_span_end">
                        <h2>{SliderDataEndPage[indexRespSlider].text}</h2>
                        <h6>{SliderDataEndPage[indexRespSlider].author}</h6>
                    </span>
                </div>
                        <div className="select_resp_slider">
                            <div className="linha_resp_slider_select"></div>
                            <button className="btn_resp_select_style" onClick={()=> RespTrocaSliderSlider(-1)}><FiArrowLeft/></button>
                            <button className="btn_resp_select_style" onClick={()=> RespTrocaSliderSlider(1)}><FiArrowRight/></button>
                        </div>
            </div>
        </>
    )
}

export default RespEndPageOne
