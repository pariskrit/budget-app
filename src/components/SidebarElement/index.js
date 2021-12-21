import React from "react";
import "./style.scss";

function SidebarElement({ Icon, title }) {
  return (
    <div className="element">
      <Icon />
      <p>{title}</p>
    </div>
  );
}

export default SidebarElement;
