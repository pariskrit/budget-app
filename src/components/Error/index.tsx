import React from "react";
import "./style.scss";

function Error({ message, show }: { message: string; show: boolean }) {
  if (!show) {
    return null;
  }
  return (
    <div className="error">
      <p>{message}</p>
    </div>
  );
}

export default Error;
