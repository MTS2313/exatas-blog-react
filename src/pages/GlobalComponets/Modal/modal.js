import React,{useState} from "react";

import { IoIosClose } from "react-icons/io";
import {MdSend} from "react-icons/md"

import commentery_data from "../../data/Post/PostCommenteryData";
import PrimaryComment from "../PrimaryComment/PrimaryComment";
import "./modal.css";
function Modal(props) {
  return (
    <>
      <div className="modal_content_external">
        <div className="modal_content_intern">
          <PrimaryComment modalCLose={props.modalCLose}/>
        </div>
      </div>
    </>
  );
}

export default Modal;
