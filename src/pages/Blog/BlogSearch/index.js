import React from "react";
import { IoMdSearch } from "react-icons/io";

import "./Styles/BlogSearch.css";
function BlogSearch() {
  let backgroundImage = "/img/BlogSearchImg.png";

  return (
    <>
      <div
        id="back_sec_blogser"
        className="back_sec_BlogSearch"
        style={{
          backgroundImage: "url(" + backgroundImage + ")",
        }}
      >
        <div className="content">
          <span className="text_BlogSearch">
            <h2>Search for anything</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vitae eleifend lorem. Sed semper est sit amet tincidunt lobortis.
              Vivamus tristique feugiat imperdiet. In hac habitasse platea
              dictumst..
            </p>
          </span>

          <span className="input_BlogSearch">
            <IoMdSearch className="icon_search_blSr" />
            <input type="text" placeholder="Search" />
          </span>
        </div>
      </div>
    </>
  );
}

export default BlogSearch;
