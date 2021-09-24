import React from "react";
import DarkButton from "../../Home/NavBar/DarkButton";
import "../styles/resert_password.css";
function ResertPassWord() {
  return (
    <div className="content_password_resert">
      <span className="resert_password_text">
        <h2>Chose an new password</h2>
        <p>Now chose an new password to your account.</p>
      </span>
      <span className="input_resert_pass">
        <label>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4998 7.5L18.9998 4M20.9998 2L18.9998 4L20.9998 2ZM11.3898 11.61C11.9061 12.1195 12.3166 12.726 12.5975 13.3948C12.8785 14.0635 13.0244 14.7813 13.0268 15.5066C13.0292 16.232 12.8882 16.9507 12.6117 17.6213C12.3352 18.2919 11.9288 18.9012 11.4159 19.4141C10.903 19.9271 10.2937 20.3334 9.62309 20.6099C8.95247 20.8864 8.23379 21.0275 7.50842 21.025C6.78305 21.0226 6.06533 20.8767 5.39658 20.5958C4.72782 20.3148 4.12125 19.9043 3.61179 19.388C2.60992 18.3507 2.05555 16.9614 2.06808 15.5193C2.08061 14.0772 2.65904 12.6977 3.67878 11.678C4.69853 10.6583 6.078 10.0798 7.52008 10.0673C8.96216 10.0548 10.3515 10.6091 11.3888 11.611L11.3898 11.61ZM11.3898 11.61L15.4998 7.5L11.3898 11.61ZM15.4998 7.5L18.4998 10.5L21.9998 7L18.9998 4L15.4998 7.5Z"
              stroke="#1C1C1C"
              stroke-opacity="0.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="password" placeholder="password" />
        </label>
        <label>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4998 7.5L18.9998 4M20.9998 2L18.9998 4L20.9998 2ZM11.3898 11.61C11.9061 12.1195 12.3166 12.726 12.5975 13.3948C12.8785 14.0635 13.0244 14.7813 13.0268 15.5066C13.0292 16.232 12.8882 16.9507 12.6117 17.6213C12.3352 18.2919 11.9288 18.9012 11.4159 19.4141C10.903 19.9271 10.2937 20.3334 9.62309 20.6099C8.95247 20.8864 8.23379 21.0275 7.50842 21.025C6.78305 21.0226 6.06533 20.8767 5.39658 20.5958C4.72782 20.3148 4.12125 19.9043 3.61179 19.388C2.60992 18.3507 2.05555 16.9614 2.06808 15.5193C2.08061 14.0772 2.65904 12.6977 3.67878 11.678C4.69853 10.6583 6.078 10.0798 7.52008 10.0673C8.96216 10.0548 10.3515 10.6091 11.3888 11.611L11.3898 11.61ZM11.3898 11.61L15.4998 7.5L11.3898 11.61ZM15.4998 7.5L18.4998 10.5L21.9998 7L18.9998 4L15.4998 7.5Z"
              stroke="#1C1C1C"
              stroke-opacity="0.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        <input type="password" placeholder="confirm your password"/>
        </label>
      </span>
      <DarkButton button_text="Confirm" styleButtonDark="resert_password_darkButton"/>
    </div>
  );
}

export default ResertPassWord;
