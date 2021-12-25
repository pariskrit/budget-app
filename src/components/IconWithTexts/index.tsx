import React from "react";
import "./style.scss";

interface IconDataType {
  Icon: any;
  primaryText: string;
  secondaryText: string;
  showIcon?: boolean;
}
function IconWithTexts({
  Icon,
  primaryText,
  secondaryText,
  showIcon = true,
}: IconDataType) {
  return (
    <div className="iconData">
      {showIcon && <Icon className="icon" />}
      <div>
        <p className="primary">{primaryText}</p>
        <p className="secondary">{secondaryText}</p>
      </div>
    </div>
  );
}

export default IconWithTexts;
