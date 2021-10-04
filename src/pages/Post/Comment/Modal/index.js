import React, { useState } from "react";

import AllComment from "../AllComment";
import SelectComment from "../SelectComment/index";

import "./styles/styles.css";
function ModalUI(props) {
  var [CommentActual, setCommentActual] = useState(true);
  let [indexToCommentComp, setindexToCommentComp] = useState(null);
  function getdata(index) {
    setindexToCommentComp((indexToCommentComp = index));
    setCommentActual((CommentActual = false));
  }

  return (
    <>
      <div className="modal_background">
        <div className="modal_center_box">
          {CommentActual ? (
            <AllComment
              getIndex={getdata}
              onCloselevalOne={props.onCloselevalduo}
              onCommentClick={() => setCommentActual((CommentActual = false))}
            />
          ) : (
            <SelectComment
              id={indexToCommentComp}
              btnBack={() => setCommentActual((CommentActual = true))}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ModalUI;
