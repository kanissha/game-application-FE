import "./login.css";
import React, { useState } from "react";

export default function Register(props) {
  const { setRegister } = props;

  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const registerUser = () => {
    fetch("https://game-list-flask.onrender.com/register", {
      method: "POST",
      body: JSON.stringify({
        username: userName,
        email: userEmail,
        password: userPassword
      }),
    })
      .then((data) => {
        if (data.status === 200) {
          setRegister(false);
        }
      })
      .catch((err) => {
        console.log("Register", err);
      });
  };
  return (
    <div className="register">
      <p className="hi-text">Welcome to Game App</p>
      <div className="register-container">
        <label name="uName">User name:</label>
          <input
            required
            type="text"
            id="uName"
            name="uName"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br></br>
          <label name="uEmail">Email id:</label>
          <input
            required
            type="email"
            id="uEmail"
            name="uEmail"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <br></br>
          <label name="uPassword">Password:</label>
          <input
            required
            type="password"
            id="uPassword"
            name="uPassword"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <br></br>
          <button
          className="login-button" 
            disabled={
              userName === null || userEmail === null || userPassword === null ||
              userName === "" || userEmail === "" || userPassword === ""
            }
            onClick={registerUser}
          >
            Register
          </button>
      </div>
    </div>
  );
}
