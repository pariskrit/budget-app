import React from "react";
import "./style.scss";
import loader from "../../assets/loader.gif";

function LoginRegisterContainer({
  imageSource,
  loading,
  children,
}: {
  imageSource: string;
  loading: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="login_container">
      <div className="inner_container">
        <div className="icon">
          <img
            src={loading ? loader : imageSource}
            alt="Login"
            className="login_icon"
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default LoginRegisterContainer;
