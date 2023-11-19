import "./game.css";
import React, { useState } from "react";

export default function AddGame() {
  const [gameDetails, setGameDetails] = useState({
    title: "",
    genre: "",
    year: "",
    is_favourite: false,
    description: "",
    language: "",
    platform: "",
    playtime: "",
    virtual_currency_balance: "",
    virtual_currency_earned: "",
  });
  const addGame = () => {
    fetch("https://game-list-flask.onrender.com/add_game", {
      method: "POST",
      body: JSON.stringify(gameDetails),
    })
      .then((data) => {
        if (data.status === 200) {
        }
      })
      .catch((err) => {
        console.log("Add game", err);
      });
  };
  return (
    <div className="add-games">
      <p className="hi-text">Add a New game</p>
      <div className="add-game-container">
        <label name="title">Title</label>
        <input
          required
          type="text"
          id="title"
          name="title"
          onChange={(e) =>
            setGameDetails({ ...gameDetails, title: e.target.value })
          }
        />
        <br></br>
        <label name="desc">Description</label>
        <input
          required
          type="text"
          id="desc"
          name="desc"
          onChange={(e) =>
            setGameDetails({ ...gameDetails, description: e.target.value })
          }
        />
        <br></br>
        <label name="genre">Genre</label>
        <input
          required
          type="text"
          id="genre"
          name="genre"
          onChange={(e) =>
            setGameDetails({ ...gameDetails, genre: e.target.value })
          }
        />
        <br></br>
        <label name="year">Year</label>
        <input
          required
          type="text"
          id="year"
          name="year"
          onChange={(e) =>
            setGameDetails({ ...gameDetails, year: e.target.value })
          }
        />
        <br></br>
        <label name="lang">Language</label>
        <input
          required
          type="text"
          id="lang"
          name="lang"
          onChange={(e) =>
            setGameDetails({ ...gameDetails, language: e.target.value })
          }
        />
        <br></br>
        <label name="plat">Platform</label>
        <input
          required
          type="text"
          id="plat"
          name="plat"
          onChange={(e) =>
            setGameDetails({ ...gameDetails, platform: e.target.value })
          }
        />
        <br></br>
        <label name="play">Playtime</label>
        <input
          required
          type="text"
          id="play"
          name="play"
          onChange={(e) =>
            setGameDetails({ ...gameDetails, playtime: e.target.value })
          }
        />
        <br></br> <label name="bal">Virtual Currency Balance</label>
        <input
          required
          type="text"
          id="bal"
          name="bal"
          onChange={(e) =>
            setGameDetails({
              ...gameDetails,
              virtual_currency_balance: e.target.value,
            })
          }
        />
        <br></br> <label name="earn">Virtual Currenct Earned</label>
        <input
          required
          type="text"
          id="earn"
          name="earn"
          onChange={(e) =>
            setGameDetails({
              ...gameDetails,
              virtual_currency_earned: e.target.value,
            })
          }
        />
        <br></br>
        <button
          className="login-button"
          disabled={
            gameDetails.title === " " ||
            gameDetails.description === "" ||
            gameDetails.genre === "" ||
            gameDetails.playtime === "" ||
            gameDetails.platform === "" ||
            gameDetails.year === "" ||
            gameDetails.virtual_currency_balance === "" ||
            gameDetails.virtual_currency_earned === ""
          }
          onClick={addGame}
        >
          Add Game
        </button>
      </div>
    </div>
  );
}
