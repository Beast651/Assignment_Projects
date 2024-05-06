import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import img from "../assets/Bell.png";
import pic from "../assets/pic.png";

function ContentHeader() {
  return (
    <div className="content--header">
      <h2 className="header--title text-2xl">Overview</h2>
      <div className="header--activity">
        <div className="search-box">
          <BiSearch className="icon" />
          <input type="text" placeholder="Search for something" />
        </div>
        <div className="notify">
          <IoSettingsOutline className="icon" />
        </div>
        <div>
          <img src={img} alt="" className="picture" />
        </div>
        <div>
          <img src={pic} alt="" className="picture" />
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
