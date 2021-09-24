import React from "react";

import "../Styles/LoginTapOne.css";
import DarkButton from "../../Home/NavBar/DarkButton";

function LoginTapOne() {
  return (
    <>
      <div className="content_login">
        <span className="text_top_content">
          <h2>Welcome back!</h2>
          <p>Sign in to get the most out of exatas.</p>
        </span>
        <span className="input_content">

          <label>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="#1C1C1C"
                stroke-opacity="0.5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#1C1C1C"
                stroke-opacity="0.5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input type="text" placeholder="Username" />
          </label>
          <label>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4998 7.5L18.9998 4M20.9998 2L18.9998 4L20.9998 2ZM11.3898 11.61C11.9061 12.1195 12.3166 12.726 12.5975 13.3948C12.8785 14.0635 13.0244 14.7813 13.0268 15.5066C13.0292 16.232 12.8882 16.9507 12.6117 17.6213C12.3352 18.2919 11.9288 18.9012 11.4159 19.4141C10.903 19.9271 10.2937 20.3334 9.62309 20.6099C8.95247 20.8864 8.23379 21.0275 7.50842 21.025C6.78305 21.0226 6.06533 20.8767 5.39658 20.5958C4.72782 20.3148 4.12125 19.9043 3.61179 19.388C2.60992 18.3507 2.05555 16.9614 2.06808 15.5193C2.08061 14.0772 2.65904 12.6977 3.67878 11.678C4.69853 10.6583 6.078 10.0798 7.52008 10.0673C8.96216 10.0548 10.3515 10.6091 11.3888 11.611L11.3898 11.61ZM11.3898 11.61L15.4998 7.5L11.3898 11.61ZM15.4998 7.5L18.4998 10.5L21.9998 7L18.9998 4L15.4998 7.5Z" stroke="#1C1C1C" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            <input type="password" placeholder="password"/>
          </label>
        </span>
        <span className="help_content">
            <span>
                <input className="BoxSelect" type="checkbox" />
                <p>Remember me</p>
            </span>
            <button className="button_Forgot"><a href="/forgot_email">Forgot Password?</a></button>
        </span>
        <DarkButton button_text="Login" styleButtonDark="buttonDartLogin" />
      </div>
    </>
  );
}

export default LoginTapOne;
