import React from "react";
import "./style.scss";

interface buttonType {
  children: string;
  type: "button" | "submit";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDeleteButton?: boolean;
  disabled?: boolean;
}
function Button({ children, isDeleteButton, ...rest }: buttonType) {
  return (
    <button className={`button ${isDeleteButton ? "delete" : null}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
