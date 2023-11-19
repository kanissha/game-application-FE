import "./game.css";
import React from "react";

export default function AddGame() {
  const addReview = () => {
    fetch("https://game-list-flask1.onrender.com/games/addfeedback/1", {
      method: "POST",
      body: JSON.stringify({
        username:"Kanissha",
        rating:"7",
        comment:"Good and interesting"
      }),
    })
      .then((data) => {
        if (data.status === 200) {
        }
      })
      .catch((err) => {
        console.log("Add Review", err);
      });
  };
  return (
    <div className="add-reviews">
      <p className="hi-text">Add your Review</p>
      <div className="add-game-container">
        <label name="uName">User Name</label>
        <input
          required
          type="text"
          id="uName"
          name="uname"
          // onChange={(e) => setUserName(e.target.value)}
        />
        <br></br>
        <label name="rat">Rating</label>
        <input
          required
          type="text"
          id="rat"
          name="rat"
          // onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <label name="com">Comment</label>
        <input
          required
          type="text"
          id="com"
          name="com"
          // onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button
          className="login-button"
          // disabled={userName === null || password === null || userName === " " || password === ""}
          onClick={addReview}
        >
          Add Review
        </button>
      </div>
    </div>
  );
}
