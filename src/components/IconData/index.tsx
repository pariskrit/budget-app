import React from "react";
import "./style.scss";

interface IconDataType {
  Icon: any;
  primaryText: string;
  secondaryText: string;
}
function IconData({ Icon, primaryText, secondaryText }: IconDataType) {
  return (
    <div className="iconData">
      <Icon className="icon" />
      <div>
        <p className="primary">{primaryText}</p>
        <p className="secondary">{secondaryText}</p>
      </div>
    </div>
  );
}

export default IconData;
