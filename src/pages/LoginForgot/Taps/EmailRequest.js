import React from "react";

import DarkButton from "../../Home/NavBar/DarkButton";
import "../styles/LoginForgot.css";

function EmailRequest() {
  function EmailCheck(){
    
  }
  return (
    <>
      <div className="content_forgot_password">
        <span className="text_forgot">
          <h2>Put your email address</h2>
          <p>
            We will send an email with an confirmation code to you <br />
            recovery your passwod
          </p>
          <p className="pErro_msg" id="MsgErro"></p>
        </span>
        <span className="input_forgot_mail">
          <label>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                fill="#1C1C1C"
                fill-opacity="0.5"
              />
            </svg>
            <input id="input_email_forgot" type="email" placeholder="Email" />
          </label>
        </span>
      <DarkButton DarkButtonActiveClick={()=> EmailCheck()} button_text="Next" styleButtonDark="button_dark_next" darkbuttonlink="/forgot_code"/>
      </div>
    </>
  );
}

export default EmailRequest;
