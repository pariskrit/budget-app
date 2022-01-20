import React from "react";
import "./style.scss";

function NoData({ title, fontSize }: { title: string; fontSize?: number }) {
  return (
    <div className="no_data">
      <h1 style={{ fontSize: `${fontSize}px` }}>No {title}</h1>
    </div>
  );
}

export default NoData;
