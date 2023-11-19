import "./game.css";
import React from "react";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

export default function GameCard(props) {
  const { games } = props;
  return (
    <>
      <div>
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <div className="game">
              <div className="game-header">
                        <div className="game-title">
                        <div className="game-name">{game.title}</div>
                <div className="game-desc">{game.decription}</div>
                </div>
                        <div className="game-fav">{
                        game.is_favourite ? <MdFavorite /> : <MdFavoriteBorder />
                        }</div>
              </div>
              <p>Platform: {game.platform}</p>
              <p>Playtime: {game.playtime}</p>
              <p>Virtual Currency Balance: {game.virtual_currency_balance}</p>
              <p>Virtual Currency Earned: {game.virtual_currency_earned}</p>
              <div className="chips">
                <div className="game-chip">{game.year}</div>
                <div className="game-chip">{game.genre}</div>
                <div className="game-chip">{game.language}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
