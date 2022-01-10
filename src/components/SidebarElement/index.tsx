import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

interface sidebarelementType {
  Icon: any;
  title: string;
  selected?: boolean;
  path: string;
}
function SidebarElement({
  Icon,
  title,
  selected = false,
  path,
}: sidebarelementType) {
  return (
    <Link to={path} className="link">
      <div className={`element ${selected ? "selected" : ""}`}>
        <Icon />
        <p>{title}</p>
      </div>
    </Link>
  );
}

export default SidebarElement;
