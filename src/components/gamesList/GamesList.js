import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// styles
import "./GamesList.css";

export default function GamesList({ games }) {
  console.log(games);
  return (
    <div className="games-list">
      {games.length === 0 && <p>No Games</p>}
      {games.map((game) => (
        <div className="games-container">
          <h4>{game.title}</h4>
          <Link to={`/game/${game.id}`}>
            <img
              className="game-image"
              src={game.image}
              alt="game background"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
