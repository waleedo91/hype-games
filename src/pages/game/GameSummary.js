// styles
import "./Game.css";

export default function GameSummary({ game }) {
  return (
    <div>
      <div className="game-summary">
        <h2 className="game-title">{game.name}</h2>
        <img className="game-image" src={game.image} alt="game pic" />
      </div>
      <div className="game-container">
        <div className="game-left">
          <p className="game-description">{game.about}</p>
        </div>
        <div className="game-right">
          <p className="metascore">Metascore: {game.metascore}</p>

          <ul className="platforms">
            <span>Platforms:</span>
            {game.platforms.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <br />
          <ul className="genres">
            {game.genre.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <br />

          {game.developer.map((d) => (
            <p className="developers" key={d}>
              {d}
            </p>
          ))}
          <br />

          <p className="rating">{game.rating}</p>

          <br />
          <p className="release">{game.release}</p>
        </div>
      </div>
    </div>
  );
}
