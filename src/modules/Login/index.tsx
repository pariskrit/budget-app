import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./style.scss";
import loader from "../../assets/loader.gif";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const defaultState = { email: "", password: "" };

function Login() {
  const [user, setUser] = useState(defaultState);
  const [isLogging, setIsLogging] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async () => {
    setIsLogging(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      localStorage.setItem("id", response.user.uid);
      setUser(defaultState);
      navigate("/overview", { replace: true });
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }

    setIsLogging(false);
  };

  return (
    <div className="login_container">
      <div className="login">
        <div className="login_icon_container">
          <img
            src={
              isLogging
                ? loader
                : "https://iconarchive.com/download/i87099/graphicloads/colorful-long-shadow/Lock.ico"
            }
            alt="Login Icon"
            className="login_icon"
          />
        </div>
        <form>
          <label>
            <strong>Username:</strong>
          </label>
          <br />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={user.email}
            onChange={onInputChange}
          />
          <br />
          <label>
            <strong>Password:</strong>
          </label>
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
            onChange={onInputChange}
          />
          <div className="login_buttons">
            <Button type="button" onClick={onSubmit} disabled={isLogging}>
              Log In
            </Button>
            <Link to="/register">New Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
