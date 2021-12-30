import React from "react";
import "./style.scss";

interface buttonType {
  children: string;
  type: "button" | "submit";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
function Button({ children, ...rest }: buttonType) {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
}

export default Button;