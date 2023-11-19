import "./login.css";
import React, { useState } from "react";
import Register from "./register";
import Games from "../GamesPage/games";

export default function Login() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [register, setRegister] = useState(false);
  const [games, setGames] = useState(false);

  const loginUser = () => {
    fetch("https://game-list-flask1.onrender.com/login", {
      method: "POST",
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    })
      .then((data) => {
     
          setGames(true);
        
      })
      .catch((err) => {
        setGames(true);
        console.log("Login", err);
      });
  };

  return (
    <>
      {register ? (
        <Register setRegister={setRegister} />
      ) : games ? (
        <Games userName={userName} />
      ) : (
        <div className="login">
          <p className="hi-text">Welcome to Game App</p>
          <div className="login-container">
            <label name="uName">User name:</label>
            <input
              required
              type="text"
              id="uName"
              name="uName"
              onChange={(e) => setUserName(e.target.value)}
            />
            <br></br>
            <label name="uPassword">Password:</label>
            <input
              required
              type="password"
              id="uPassword"
              name="uPassword"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <button
              className="login-button"            
              disabled={userName === null || password === null || userName === " " || password === ""}
              onClick={loginUser}
            >
              Login
            </button>
          </div>
          <p>
            Not a user? <a onClick={() => setRegister(true)}>Register here</a>
          </p>
        </div>
      )}
    </>
  );
}
