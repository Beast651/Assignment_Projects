import React from "react";
import { BiHelpCircle, BiMessage, BiStats, BiTask } from "react-icons/bi";
import "../styles/sidebar.css";
import icon from "../assets/icon.png";
import home from "../assets/home.png";
import account from "../assets/user.png";
import setting from "../assets/setting.png";
import priv from "../assets/priv.png";
import loan from "../assets/loan.png";
import trans from "../assets/trans.png";
import cred from "../assets/credit.png";
import service from "../assets/service.png";
import invest from "../assets/invest.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="menu">
      <div className="logo">
        {/* <BiBookAlt className="logo-icon" /> */}
        <img src={icon} alt="" />
        <p>BankDash.</p>
      </div>

      <div className="menu--list">
        <Link to="/home" className="item" style={{ color: "blue", opacity: 1 }}>
          {/* <BiHome className="licon" /> */}
          <img src={home} alt="" width={"20px"} />
          Dashboard
        </Link>
        <Link to="/home" className="item">
          <img src={trans} alt="" width={"20px"} />
          Transaction
        </Link>
        <Link to="/home" className="item">
          {/* <BiSolidReport className="icon" /> */}
          <img src={account} alt="" width={"20px"} />
          Account
        </Link>
        <Link to="/home" className="item">
          <img src={invest} alt="" width={"20px"} />
          Investments
        </Link>
        <Link to="/home" className="item">
          <img src={cred} alt="" width={"20px"} />
          Credit Cards
        </Link>
        <Link to="/home" className="item">
          <img src={loan} alt="" width={"20px"} />
          Loans
        </Link>
        <Link to="/home" className="item">
          <img src={service} alt="" width={"20px"} />
          Services
        </Link>
        <Link to="/home" className="item">
          <img src={priv} alt="" width={"20px"} />
          My Privileges
        </Link>
        <Link to="/home" className="item">
          <img src={setting} alt="" width={"20px"} />
          Setting
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
