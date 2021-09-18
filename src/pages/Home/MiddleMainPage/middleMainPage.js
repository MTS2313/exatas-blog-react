import React from "react";
import { AiOutlineArrowRight, FaBeer } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import "./Styles/Content.css"


function MiddleMain() {
    const RecentData = [
        
        { 
            isInvert: true,
            link:"#",
            title:"Loren Ipsum",
            desc:" dolor sit amet, consectetur adipiscing elit. Mauris iaculis tempus turpis. Praesent et finibus elit, nec tincidunt risus. Praesent ultrices ullamcorper commodo. Pellentesque quis enim egestas, accumsan lacus vitae, aliquam tortor.",
            img:"https://images.unsplash.com/photo-1620028193701-8e87306bb1d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1875&q=80",
        },
        {
            isInvert: false,
            link:"#",
            title:"Loren Ipsum",
            desc:" dolor sit amet, consectetur adipiscing elit. Mauris iaculis tempus turpis. Praesent et finibus elit, nec tincidunt risus. Praesent ultrices ullamcorper commodo. Pellentesque quis enim egestas, accumsan lacus vitae, aliquam tortor.",
            img:"https://images.unsplash.com/photo-1541958409-7618fd1ad26e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
        },
        { 
            isInvert: true,
            link:"#",
            title:"Loren Ipsum",
            desc:" dolor sit amet, consectetur adipiscing elit. Mauris iaculis tempus turpis. Praesent et finibus elit, nec tincidunt risus. Praesent ultrices ullamcorper commodo. Pellentesque quis enim egestas, accumsan lacus vitae, aliquam tortor.",
            img:"https://images.unsplash.com/photo-1621713745398-28bb5b45b223?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
    ];
   
    return (

        RecentData.map((i) => {
            if (i.isInvert){
                return (
                    <div className="MiddleMain-Main">
           <div className="MiddleMain-Image">
               <img src={i.img}></img>
           </div>
           <div className="MiddleMain-Line">

           </div>
           <div className="MiddleMain-Text-Link">
               <h1 className="MiddleMainTitle">{i.title}</h1><h2 className="MiddleMainSubTitle">{i.desc}</h2>
                   <a href="">
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
                            <a href="">
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