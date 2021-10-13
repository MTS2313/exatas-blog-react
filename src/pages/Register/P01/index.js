import React, { useState } from "react";
import "./styles/styles.css";
import { RiKeyLine, RiMailLine, RiUserLine } from "react-icons/ri";
import DarkButton from "../../Home/NavBar/DarkButton";
import { emailv, fullnamev, usernamev } from "../script/scriptv";
function P1(props) {
  var [setbtn, setsetbtn] = useState(null);
  var stagenumber = 1; 
  var  [checkeadinput,  setcheckeadinput] = useState(0);
  var emaild;
  function formvalided (e){
    if(e.target.name === "email"){
      if(emailv(e.target.value)){
        document.getElementById("email_label_id").style.borderColor = "green"
        console.log("ok");
      }else{
        document.getElementById("email_label_id").style.borderColor = "red"
      }
    }
    if (e.target.name === "fullname") {
      if (fullnamev(e.target.value)) {
        document.getElementById("input_fullname_id").style.borderColor = "green"
        console.log("n1")
      }else{
        document.getElementById("input_fullname_id").style.borderColor = "red"
      }
    }
    if (e.target.name === "username") {
      if (usernamev(e.target.value)) {
        document.getElementById("username_input_id").style.borderColor = "green"
        
      }else{
        document.getElementById("username_input_id").style.borderColor = "red"
        
      }
    }
    if (e.target.name === "password") {
    }
    if (e.target.name ===  "confimpassword") {
    }
  }
  return (
    <>
      <input
        type="hidden"
        name="stage"
        id="input_from_btn_enable"
        value={stagenumber}
      />
      <section className="etapaOne">
        <div className="progress_bar_33">
          <div className="actual_bar_33"></div>
          <div className="next_bar_67"></div>
        </div>
        <div className="block_for_items">
          <div className="columone">
            <div className="info_progress_actual">
              <h2 className="progress_name_tag">Progress</h2>
              <h5 className="atual_etapa">01-03</h5>
            </div>
          </div>
          <div className="columduo">
            <h2 className="et01">
              Let´s create your <br /> account
            </h2>
            <h6 className="et01_sub_title">
              Sign in to get the most out of exatas.
            </h6>
            <div className="content_input_email content_input_all">
              <label className="user_email_lb" id="email_label_id">
                <RiMailLine className="icons_register_input" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e)=> formvalided(e)}
                  className="email_input_regiter input_all_register_config"
                  placeholder="Email"
                  key="email"
                  />
              </label>
            </div>
            <div className="content_name_complete content_input_all">
              <label className="user_name_all_label" id="input_fullname_id">
                <RiUserLine className="icons_register_input" />
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  onChange={(e)=> formvalided(e)}
                  className="input_complete_name input_all_register_config"
                  placeholder="Full Name"
                />
              </label>
            </div>
            <div className="content_user_name content_input_all">
              <label className="user_name" id="username_input_id">
                <RiUserLine className="icons_register_input" />
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e)=> formvalided(e)}
                  className="user_name_register_input input_all_register_config"
                  placeholder="Nick Name"
                />
              </label>
            </div>
            <div className="content_password content_input_all">
              <label className="password_one" id="passwordid">
                <RiKeyLine className="icons_register_input" />
                <input
                  type=""
                  name="password"
                  id="inputpassid"
                  onChange={(e)=> formvalided(e)}
                  className="input_password_register input_all_register_config"
                  placeholder="Password"
                />
              </label>
            </div>
            <div className="content_password_confirm content_input_all">
              <label className="password_confirm" id="confirminputlab">
                <RiKeyLine className="icons_register_input" />
                <input
                  type=""
                  onChange={(e)=> formvalided(e)}
                  name="passwordconfirm"
                  id="confirminput"
                  className="input_password_confirm_register input_all_register_config"
                  placeholder="Password Confirm"
                />
              </label>
            </div>
          </div>
          <div className="columthree">{props.btnform}</div>
        </div>
      </section>
    </>
  );
}

export default P1;
