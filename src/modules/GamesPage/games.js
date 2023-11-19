import "./game.css";
import React, { useEffect, useState } from "react";
import GameCard from "./gameCard";
import Review from "./addReview";
import AddGame from "./addGame";

export default function Games(props) {
  const { userName } = props;

  const [games, setGames] = useState([
    {
      decription: "Explore in road",
      genre: "action",
      id: 2,
      is_favourite: true,
      language: "English",
      platform: "Playstation",
      playtime: 6,
      title: "sorb",
      virtual_currency_balance: 100,
      virtual_currency_earned: 20,
      year: 2001,
    },
    {
      decription: "farm game",
      genre: "Stimulation",
      id: 1,
      is_favourite: false,
      language: "English",
      platform: "Playstation",
      playtime: 8,
      title: "witcher3",
      virtual_currency_balance: 170,
      virtual_currency_earned: 70,
      year: 2009,
    },
  ]);
  const [addGames, setAddGames] = useState(false);
  const [review, setReview] = useState(false);

  const [search, setSearch] = useState("genre");
  const [searchValue, setSearchValue] = useState(null);

  const fetchData = async () => {
    const data = await fetch("https://game-list-flask1.onrender.com/games");
    try {
      // if (data.status === 200) {
      //   setGames([]);
      // }
      console.log("games", data);
    } catch (err) {
      console.log("Fetch games", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (search !== null && searchValue != null) {
      fetch(
        `https://game-list-flask1.onrender.com/search?${search}=${searchValue}`,
        { method: "GET" }
      )
        .then((data) => {
          //   if (data.status === 200) {
          //     setGames([]);
          //   }
          console.log("search", data);
        })
        .catch((err) => {
          console.log("search", err);
        });
    }
  }, [searchValue, search]);

  return (
    <>
      <div className="welcome-text">Hi {userName}, Welcome to Games App!</div>
      <div className="search">
        <label>Search: </label>
        <label for="search">Choose a category: </label>
        <select
          name="search"
          id="search"
          placeholder="Select"
          onChange={(e) => setSearch(e.target.value)}
        >
          <option value="genre">Genre</option>
          <option value="year">Year</option>
          <option value="title">Title</option>
          <option value="description">Description</option>
          <option value="platform">Platform</option>
          <option value="playtime">Playtime</option>
          <option value="virtual_currency_balance">
            Virtual Currency Balance
          </option>
          <option value="virtual_currency_earned">
            Virtual Currency Earned
          </option>
        </select>
        <label> Search Value </label>
        <input
          type="text"
          id="search"
          name="search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {games.length !== 0 && (
          <button className="add-game" onClick={() => setAddGames(true)}>
            Add Game
          </button>
        )}
        <button className="add-review" onClick={() => setReview(true)}>
          Add Review
        </button>
      </div>
      {review ? (
        <Review />
      ) : addGames ? (
        <AddGame />
      ) : games.length === 0 ? (
        <div className="no-games">
          <p>There are no Games right now, please add games</p>
          <button className="add-game-1" onClick={() => setAddGames(true)}>
            Add Game
          </button>
        </div>
      ) : (
        <GameCard games={games} />
      )}
    </>
  );
}
