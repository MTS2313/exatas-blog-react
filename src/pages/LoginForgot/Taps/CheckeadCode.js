import React from "react";
import DarkButton from "../../Home/NavBar/DarkButton";

function CheckeadCode() {
  return (
    <div className="content_code_checkead">
      <span className="text_code_checkead">
        <h2>Put the code</h2>
        <p>
          We send an email with an confirmation code
          <br /> to you recovery your passwod
        </p>
      </span>
      <span className="code_checkead_input">
        <label className="label_code_input">
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z" fill="black" fill-opacity="0.5"/>
</svg>

          <input type="text" placeholder="Code" />
        </label>
      </span>
      <DarkButton button_text="Recovery" styleButtonDark="code_button_style" darkbuttonlink="/resert-pass"/>
    </div>
  );
}

export default CheckeadCode;
