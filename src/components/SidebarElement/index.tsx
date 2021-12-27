import React from "react";
import "./style.scss";

interface sidebarelementType {
  Icon: any;
  title: string;
  selected?: boolean;
}
function SidebarElement({ Icon, title, selected = false }: sidebarelementType) {
  return (
    <div className={`element ${selected ? "selected" : ""}`}>
      <Icon />
      <p>{title}</p>
    </div>
  );
}

export default SidebarElement;
