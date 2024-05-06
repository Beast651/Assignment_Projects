import React from "react";
import img1 from "../assets/Chip_Card.png";
import img2 from "../assets/Group 17.png";
import img3 from "../assets/cd.png";
import img4 from "../assets/paypal.png";
import img5 from "../assets/rupee.png";
import img6 from "../assets/Group 17-dark.png";

function Card() {
  return (
    <div className="card-container">
      <div className="main-container">
        <div className="first flex overflow-hidden">
          <div>
            <p>My Cards</p>
            <div className="container">
              <div className="front-section">
                <div className="balance">
                  <span>Balance</span>
                  <span className="text-xl">$5786</span>
                </div>
                <img src={img1} alt="" width="38px" />
              </div>
              <div className="second-section">
                <div className="card-holder">
                  <span className="opacity-60">CARD HOLDER</span>
                  <span>Eddy Cusuma</span>
                </div>
                <div className="expiry">
                  <span className="opacity-60">VALID THRU</span>
                  <span>12/22</span>
                </div>
              </div>

              <div className="card-title">
                <p>3778 **** **** 1234</p>
                <img src={img6} alt="" height="30px" />
              </div>
            </div>
          </div>
          <div className="ml-2">
            <p style={{ textAlign: "end" }}>See All</p>
            <div className="container white">
              <div className="front-section">
                <div className="balance">
                  <span>Balance</span>
                  <span className="text-xl">$5786</span>
                </div>
                <img src={img1} alt="" width="38px" />
              </div>
              <div className="second-section">
                <div className="card-holder">
                  <span className="opacity-60">CARD HOLDER</span>
                  <span>Eddy Cusuma</span>
                </div>
                <div className="expiry">
                  <span className="opacity-60">VALID THRU</span>
                  <span>12/22</span>
                </div>
              </div>

              <div className="card-title change">
                <p>3778 **** **** 1234</p>
                <img src={img2} alt="" height="30px" />
              </div>
            </div>
          </div>
        </div>

        <div className="second">
          <p>Recent Transection</p>
          <div className="container white recent">
            <div className="first-section">
              <img src={img3} alt="" height="50px" />
              <div className="element">
                <span>Deposit from my card</span>
                <span>28 January 2021</span>
              </div>
              <span style={{ color: "#ff4b4a" }}>-$850</span>
            </div>
            <div className="first-section">
              <img src={img4} alt="" height="50px" />
              <div className="element">
                <span>Deposit Paypal</span>
                <span>25 January 2021</span>
              </div>
              <span style={{ color: "#41d4a8" }}>+$2500</span>
            </div>
            <div className="first-section">
              <img src={img5} alt="" height="50px" />
              <div className="element">
                <span>Jemi Wilson</span>
                <span>21 January 2021</span>
              </div>
              <span style={{ color: "#41d4a8" }}>+$5400</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
