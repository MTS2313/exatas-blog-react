import React,{useState} from "react";
import "./styles/styles.css";
import { RiKeyLine, RiMailLine, RiUserLine } from "react-icons/ri";
import DarkButton from "../../Home/NavBar/DarkButton";
function P1(props) {
var [setbtn, setsetbtn] = useState(null)
var [stagenumber, setstagenumber] = useState(0);
var passConf;
var powerlevel;
function passw_level (e){
  var password = e.target.value;
  powerlevel = 0;
  if(password !== null){}
  powerlevel += 10;
    if((password.length >= 8)&&(password.match(/[a-z]/))&&(password.match(/[A-Z]/))&&(password.match(/[0-9]/))){
      powerlevel += 20;
      if((password.length > 10)&&(password.match(/[!@#\/;:$%"'&*()~_-]/))){
        powerlevel += 30;
      }
    }
    if((powerlevel >= 0)&&(powerlevel <= 25)){
      document.getElementById("passwordid").style.borderColor = "red";
    }
    if((powerlevel > 25)&&(powerlevel <= 50)){
      document.getElementById("passwordid").style.borderColor = "yellow";
      passConf = password;
    }
    if((powerlevel > 50)&&(powerlevel <= 100)){
      document.getElementById("passwordid").style.borderColor = "green";
      passConf = password;
    }
    console.log(passConf);
  }
  var passwordtrue = false;
  function passExConf (e){
    var re_passConf = e.target.value;
    passConf = document.getElementById("inputpassid").value;
    if(re_passConf === passConf){
      document.getElementById("confirminputlab").style.borderColor = "green"
      passwordtrue = true;
      registerTrue();
    }
    if(re_passConf !== passConf){
      document.getElementById("confirminputlab").style.borderColor = "red"
      passwordtrue = false;
    }
  }
  var email_true = false;
  function mailConfirm(e){
    var email = e.target.value
    if((email.indexOf(".") >= 1) && (email.indexOf("@") >= 1)&&(email.lastIndexOf(".") < email.length - 1)){
      if(email.indexOf(" ")==-1){
        console.log("sa")
        email_true = true;
      }
    }
  }


  function registerTrue(e){
    console.log("email ta true? :"+email_true);
    console.log("senha ta forte? :"+powerlevel);
    console.log("a senha foi confirmada?:"+passwordtrue);
    if((email_true === true) && (powerlevel >= 50) && (passwordtrue === true)){
      setsetbtn(setbtn = props.btnform)
      setstagenumber(stagenumber = 1)
      console.log("ta ok")
    }else{
      setsetbtn(setbtn = null)
    }
  }
  return (
    <>
    <input type="hidden" name="stage" id="input_from_btn_enable" value={stagenumber} />
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
                <label className="user_email_lb">
                  <RiMailLine className="icons_register_input" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onKeyUp={(e)=> mailConfirm(e)}
                    onBlur={()=> registerTrue()}
                    className="email_input_regiter input_all_register_config"
                    placeholder="Email"
                  />
                </label>
              </div>
              <div className="content_name_complete content_input_all">
                <label className="user_name_all_label">
                  <RiUserLine className="icons_register_input" />
                  <input
                    type="text"
                    name="fullname"
                    id=""
                    onBlur={()=>registerTrue()}
                    className="input_complete_name input_all_register_config"
                    placeholder="Full Name"
                  />
                </label>
              </div>
              <div className="content_user_name content_input_all">
                <label className="user_name">
                  <RiUserLine className="icons_register_input" />
                  <input
                    type="text"
                    name="username"
                    id=""
                    onBlur={()=>registerTrue()}
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
                    onBlur={()=>registerTrue()}
                    name="password"
                    id="inputpassid"
                    className="input_password_register input_all_register_config"
                    placeholder="Password"
                    onKeyUp={(e)=>passw_level(e)}
                  />
                </label>
              </div>
              <div className="content_password_confirm content_input_all">
                <label className="password_confirm" id="confirminputlab">
                  <RiKeyLine className="icons_register_input" />
                  <input
                    type=""
                    name="passwordconfirm"
                    id="confirminput"
                    onKeyUp={(e)=> passExConf(e)}
                    className="input_password_confirm_register input_all_register_config"
                    placeholder="Password Confirm"
                  />
                </label>
              </div>
          </div>
          <div className="columthree">
            {setbtn}
          </div>
        </div>
      </section>
    </>
  );
}

export default P1;
