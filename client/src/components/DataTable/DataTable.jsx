import React from "react";

import "./styles.scss";

const DataTable = ({ data }) => (
  <div>
    {data.map(({ title, details }, i) => (
      <div className="detailWrapper" key={i}>
        <span className="transactionDetailsTitle">{title}</span>
        <span>{details}</span>
      </div>
    ))}
  </div>
);

export default DataTable;
