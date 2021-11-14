import { Link } from "react-router-dom";

// styles
import "./GamesList.css";

export default function GamesList({ games }) {
  return (
    <div className="game-list">
      {games.length === 0 && <p>No Games</p>}
      {games.map((game) => (
        <div className="game-container" key={game.id}>
          <Link to={`/game/${game.id}`} key={game.id}>
            <img
              className="game-image"
              src={game.image}
              alt="game background"
            />
            <h4>{game.name}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}
