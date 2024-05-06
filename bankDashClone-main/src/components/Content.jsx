import React from "react";
import ContentHeader from "./ContentHeader";
import "../styles/content.css";
import Card from "./Card";
import Chart from "./Chart";
import QuickTransfer from "./QuickTransfer";

function Content() {
  return (
    <div className="content">
      <ContentHeader />
      <Card />
      <Chart />
      <QuickTransfer />
    </div>
  );
}

export default Content;
