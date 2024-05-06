import React from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import { useState } from "react";
import { WeeklyActivity } from "../data/WeeklyActivity";
import { Expense } from "../data/Expense";

function Chart() {
  const [weeklyData, setWeeklyData] = useState({
    labels: WeeklyActivity.map((data) => data.day),
    datasets: [
      {
        label: "Deposite",
        data: WeeklyActivity.map((data) => data.deposite),
        backgroundColor: ["green"],
        borderRadius: 110,
        barThickness: 20,
      },
      {
        label: "Withdraw",
        data: WeeklyActivity.map((data) => data.withdraw),
        backgroundColor: ["blue"],
        borderRadius: 110,
        barThickness: 20,
      },
    ],
  });
  const [expenseData, setExpenseData] = useState({
    labels: Expense.map((data) => data.sector),
    datasets: [
      {
        label: "Expense",
        data: Expense.map((data) => data.cover),
        backgroundColor: ["grey", "orange", "blue", "pink"],
        spacing: 10,
        clip: { left: 5, top: false, right: -2, bottom: 0 },
      },
    ],
  });
  return (
    <div className="charts">
      <div>
        <p>Weekly Activity</p>
        <div className="firstChart">
          <BarChart chartData={weeklyData} />
        </div>
      </div>
      <div>
        <p>Expense</p>
        <div className="secondChart">
          <PieChart chartData={expenseData} />
        </div>
      </div>
    </div>
  );
}

export default Chart;
