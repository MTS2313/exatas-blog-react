import React,{useState} from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import "./styles.css";
import NavBar from "./../Home/NavBar/nav_bar";
import P1 from "./P01/index"
import P2 from "./P02/index"
import P3 from "./P03/index"
function RegisterMain() {
  var [tapvarcontrol, settapvarcontrol] = useState(1)
  var[tap, settap] = useState(<P1/>);
  function control_tap(s) {
    if(s === "back"){
      if(tapvarcontrol === 1){
        return
      }
      if (tapvarcontrol === 2) {
        settap(tap = <P1/>)
        settapvarcontrol(tapvarcontrol = 1)
        return
      }
      if(tapvarcontrol === 3){
        settap(tap = <P2/>)
        settapvarcontrol(tapvarcontrol = 2)
        return
      }
    }
    if(s === "next"){
      if(tapvarcontrol === 1){
        console.log("troca p2");
        settap(tap = <P2/>)
        settapvarcontrol(tapvarcontrol = 2)
        return
      }
      if(tapvarcontrol === 2){
        settap(tap = <P3/>)
        settapvarcontrol(tapvarcontrol = 3)
        return
      }
    }
  }
  return (
    <section className="register_control">
      <div className="nav_bar_register_control">
        <NavBar />
      </div>
      {/* tap register */}
      {tap}
      {/* tap register */}
      <div className="btn_tap_controll">
        <button
          className="btn_back style_btn_duo_control"
          onClick={() => control_tap("back")}
        >
          <HiOutlineArrowLeft className="icon_back_btn_register" />
          <h2 className="btn_back_text">Back</h2>
        </button>
        <button className="btn_next style_btn_duo_control"
        onClick={()=> control_tap("next")}>
          <h2 className="btn_next_next">Next</h2>
          <HiOutlineArrowRight className="icon_next_btn" />
        </button>
      </div>
    </section>
  );
}

export default RegisterMain;
