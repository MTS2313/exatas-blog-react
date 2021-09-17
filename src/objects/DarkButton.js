import React from 'react'

import "../css/DarkButtonCss.css"

function DarkButton(props) {
    return (
        <>
           <button className="ButtonDark">
               <h2>{props.button_text}</h2>
           </button>
        </>
    )
}

export default DarkButton
