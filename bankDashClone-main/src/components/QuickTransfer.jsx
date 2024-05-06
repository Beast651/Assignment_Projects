import React from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import arrow from "../assets/arrow.png";
import tele from "../assets/tele.png";
import { Balance } from "../data/Balance";
import LineChart from "./LineChart";
import { useState } from "react";

function QuickTransfer() {
  const [balanceData, setBalanceData] = useState({
    labels: Balance.map((data) => data.month),
    datasets: [
      {
        label: "Balance",
        data: Balance.map((data) => data.balance),
        backgroundColor: ["blue"],
        borderColor: "blue",
        tension: 0.8,
        pointStyle: false,
      },
    ],
  });
  return (
    <div className="main-box">
      <div>
        <p>Quick Transfer</p>
        <div class="box">
          <div class="container1">
            <div class="picture-section">
              <img src={pic1} alt="" width="70px" height="70px" />
              <div class="name-section">
                <span>Livia Bator</span>
                <span>CEO</span>
              </div>
            </div>
            <div class="picture-section">
              <img src={pic2} width="70px" height="70px" alt="" />
              <div class="name-section">
                <span>Randy Press</span>
                <span>Director</span>
              </div>
            </div>
            <div class="picture-section">
              <img src={pic3} width="70px" height="70px" alt="" />
              <span>WorkMan</span>
              <span>Designer</span>
            </div>
            <img src={arrow} alt="" width="75px" />
          </div>

          <div class="last-section">
            <p>Write amount</p>
            <div class="price-section">
              <div class="price">528.50</div>
              <div class="send">
                Send
                <img src={tele} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Balance History</p>
        <div className="curve-chart">
          <LineChart chartData={balanceData} />
        </div>
      </div>
    </div>
  );
}

export default QuickTransfer;
