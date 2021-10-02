import React from "react";
import "./Styles/Content.css"
import RecentData from "../../data/home/MidPageData"

function MiddleMain() {
    
   
    return (
        
        RecentData.map((i) => {
            if (i.isInvert){
                return (
                    <div className="MiddleMain-Main">
           <div className="MiddleMain-Image">
               <img src={i.img}/>
           </div>
           <div className="MiddleMain-Line">

           </div>
           <div className="MiddleMain-Text-Link">
               <h1 className="MiddleMainTitle">{i.title}</h1><h2 className="MiddleMainSubTitle">{i.desc}</h2>
                   <a href={i.link}>
                       <div className="MiddleMain-Button"><p className="btn-view">View</p><svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.625 0.208374L12.1562 1.67712L16.9271 6.45837H0.083313V8.54171H16.9271L12.1458 13.323L13.625 14.7917L20.9166 7.50004L13.625 0.208374Z" fill="black"/>
                        </svg>
                        </div>
                    </a>
           </div>
           </div>
        )
        }
        else{
            return (
                <div className="MiddleMain-Main">
                    <div className="MiddleMain-Text-Link">
                        <h1 className="MiddleMainTitle">{i.title}</h1><h2 className="MiddleMainSubTitle">{i.desc}</h2>
                            <a href={i.link}>
                                <div className="MiddleMain-Button"><p className="btn-view">View</p><svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.625 0.208374L12.1562 1.67712L16.9271 6.45837H0.083313V8.54171H16.9271L12.1458 13.323L13.625 14.7917L20.9166 7.50004L13.625 0.208374Z" fill="black"/>
                                    </svg>
                                    </div>
                                </a>
                    </div>
                    <div className="MiddleMain-Line">

                    </div>
                    <div className="MiddleMain-Image">
                        <img src={i.img}></img>
                    </div>
                </div>
                )
            }
    })
    )
}

export default MiddleMain;