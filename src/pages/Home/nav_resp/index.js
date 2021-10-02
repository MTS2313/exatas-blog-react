import React from "react";
import "./styles/NavResp.css";
import NavBarData from "../../data/home/NavBarData";
import LinksBar from "../NavBar/links_bar";

function NavResp(props) {
    var btnState = false
    function openNav(){
        if(btnState !== true){
          console.log(btnState)
          document.getElementById("resp_links_id").style.display = "block"
          document.getElementById("overControl").style.overflow = "hidden"
          btnState = true
        }else{
          console.log(btnState)
          document.getElementById("resp_links_id").style.display = "none"
          document.getElementById("overControl").style.overflow = "unset"
          btnState = false
        }
      }
      return (
        <>
        <div className="fixed_bar">
      <div className="resp_control">
        <div className="content_resp">
          <label>
            <input
              type="checkbox"
              className="input_res"
              onClick={()=> openNav()}/>
            <div className="line_all line_one"></div>
            <div className="line_all line_duo"></div>
            <div className="line_all line_three"></div>
          </label>
          <div className="router_name">
            <h2>{props.router}</h2>
          </div>
        </div>
        <div className="logo_resp">
          <svg
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 39C30.2696 39 39 30.2696 39 19.5C39 8.73045 30.2696 0 19.5 0C8.73045 0 0 8.73045 0 19.5C0 30.2696 8.73045 39 19.5 39Z"
              fill="black"
            />
            <path
              d="M23.5497 16.3132C23.1631 16.3132 22.8294 16.5421 22.7065 16.8701C22.538 17.3197 22.3441 17.621 22.1246 17.7744C21.824 17.9843 21.3008 18.0892 20.5552 18.0892H18.4448C17.6989 18.0892 17.1758 17.9843 16.8754 17.7744C16.6557 17.621 16.4617 17.3197 16.2934 16.8703C16.1705 16.5422 15.8368 16.3132 15.4502 16.3132C14.9621 16.3132 14.5665 16.6673 14.5665 17.1041V21.27C14.5665 21.7068 14.9621 22.0609 15.4502 22.0609H15.4574C15.8401 22.0609 16.1703 21.8364 16.2974 21.5134C16.4688 21.0772 16.6705 20.7809 16.9025 20.624C17.2209 20.4087 17.735 20.3011 18.4448 20.3011H20.5553C21.2648 20.3011 21.7789 20.4087 22.0975 20.624C22.3293 20.7809 22.531 21.0773 22.7026 21.5135C22.8296 21.8365 23.1599 22.0609 23.5425 22.0609H23.5499C24.0379 22.0609 24.4335 21.7068 24.4335 21.27V17.1042C24.4335 16.6674 24.0379 16.3133 23.5499 16.3133H23.5497V16.3132Z"
              fill="white"
            />
            <path
              d="M26.1571 13.8366C26.2894 14.1783 26.6514 14.4108 27.0554 14.4108H27.3593C27.8849 14.4108 28.3109 14.0295 28.3109 13.5591V9.69847C28.3109 9.22806 27.8849 8.84671 27.3593 8.84671H11.6423C11.1167 8.84671 10.6906 9.22806 10.6906 9.69847V13.559C10.6906 14.0295 11.1167 14.4108 11.6423 14.4108H11.9243C12.3379 14.4108 12.7055 14.1671 12.8305 13.8143C13.1912 12.7959 13.5497 12.1863 13.9058 11.9852C14.3264 11.7479 15.1394 11.6288 16.3439 11.6288H22.6577C23.8881 11.6288 24.6943 11.7505 25.0763 11.9939C25.4011 12.2011 25.7616 12.8155 26.1571 13.8366Z"
              fill="white"
            />
            <path
              d="M10.3951 24.8604L10.6626 29.347C10.6896 29.7991 11.107 30.1533 11.6129 30.1533H27.373C27.8779 30.1533 28.2949 29.8005 28.3232 29.3493L28.6048 24.8628C28.6355 24.3744 28.2012 23.9632 27.6547 23.9632H27.4949C27.0509 23.9632 26.6645 24.2428 26.5677 24.6307C26.2726 25.8143 25.9212 26.554 25.5141 26.8496C25.0349 27.1974 24.083 27.3713 22.6583 27.3713H16.1892C14.8807 27.3713 13.9842 27.2035 13.4985 26.867C13.0848 26.5807 12.7295 25.8358 12.4334 24.6325C12.3378 24.2437 11.9506 23.9632 11.5058 23.9632H11.3454C10.7999 23.9632 10.366 24.3729 10.3951 24.8604Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      </div>
        <div className="links_content"  id="resp_links_id">
            <div className="links_config">
            {NavBarData.map((i) => (
          <LinksBar link={i.link} name={i.name} style_links_class_name="nav_resp_links"/>
        ))}
            </div>
        </div>
    </>
  );
}

export default NavResp;
