import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./style.scss";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import LoginRegisterContainer from "../../components/LoginRegisterContainer";
import Error from "../../components/Error";

const defaultState = { name: "", email: "", password: "" };

function Register() {
  const [user, setUser] = useState(defaultState);
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState({ show: false, message: "" });
  const auth = getAuth();
  const navigate = useNavigate();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async () => {
    setIsLogging(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: user.name });
      }

      localStorage.setItem("id", response.user.uid);
      setUser(defaultState);
      navigate("/overview", { replace: true });
    } catch (error: any) {
      console.log(error.message);
      setError({ show: true, message: error.message });
      setIsLogging(false);
    }
  };

  return (
    <LoginRegisterContainer
      loading={isLogging}
      imageSource="https://iconarchive.com/download/i87099/graphicloads/colorful-long-shadow/Lock.ico"
    >
      <Error show={error.show} message={error.message} />
      <form>
        <label>
          <strong>Name:</strong>
        </label>
        <br />
        <input
          type="text"
          placeholder="name"
          name="name"
          value={user.name}
          onChange={onInputChange}
        />
        <br />
        <label>
          <strong>Email:</strong>
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
            Register
          </Button>
          <Link to="/login">Already have a account</Link>
        </div>
      </form>
    </LoginRegisterContainer>
  );
}

export default Register;
