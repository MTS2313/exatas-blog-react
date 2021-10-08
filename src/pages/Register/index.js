import React, { useState } from "react";
import P1 from "./P01";
import P2 from "./P02";
import NavBar from "../Home/NavBar/nav_bar";
import "./styles.css";
import {HiOutlineArrowRight} from "react-icons/hi"
function Register() {
  var [Etapa, setEtapa] = useState(<P1 btnform={<button form="formone" className="btn_next" ><h5>Next</h5><HiOutlineArrowRight/></button>}/>);
  var registerData = [];
  function armazenar(e) {
    e.preventDefault();
    console.log(e.target.stage.value);
    switch (e.target.stage.value) {
          case "1":
            formvalidcheck(e);
            setEtapa(Etapa = <P2 list={<li>{registerData.email}</li>}/>)
            return console.log(registerData)
            break;
            case 2:
              
              break;
              case 3:
                break;
              }
function formvalidcheck(e){
      registerData.push = {
        email: e.target.email.value,
        fullname: e.target.fullname.value,
        username: e.target.username.value,
        password: e.target.password.value,
        cpassword: e.target.passwordconfirm.value,
      };
    }
  }
  return (
    <>
      <div className="register_all_div_content">
        <section className="navbar_from_register">
          <NavBar />
        </section>
        <form id="formone" onSubmit={(e)=>armazenar(e)}>
          {Etapa}
        </form>
      </div>
    </>
  );
}

export default Register;
