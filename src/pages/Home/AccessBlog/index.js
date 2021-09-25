import React from 'react'
import DarkButton from '../NavBar/DarkButton'
import "./Styles/AccBlog.css"

function AccBlog() {
    return (
        <>
          <div className="accblog_content">
              <span  className="accblog_img">
                <img src="./img/accBlog.png" alt="" />
              </span>
              <span className="info_accBlog">
                  <h3>Access our blog.</h3>
                  <p>There you will find several technologies.</p>
                  <span   className="control_btndark_span">
                  <DarkButton button_text="Acess" styleButtonDark="acc_btnDark" darkbuttonlink="#" svg={
                      <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 0L11.59 1.41L16.17 6H0V8H16.17L11.58 12.59L13 14L20 7L13 0Z" fill="white"/>
                      </svg>                      } />
                          </span>
              </span>
            </div>  
        </>
    )
}

export default AccBlog
