import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./style.scss";

const defaultState = { username: "", password: "" };

function Login() {
  const [user, setUser] = useState(defaultState);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = () => {
    console.log(user);
    setUser(defaultState);
  };

  return (
    <div className="login_container">
      <div className="login">
        <div className="login_icon_container">
          <img
            src="https://iconarchive.com/download/i87099/graphicloads/colorful-long-shadow/Lock.ico"
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
            placeholder="username"
            name="username"
            value={user.username}
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
            <Button type="button" onClick={onSubmit}>
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
