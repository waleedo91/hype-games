import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import GameSummary from "./GameSummary";

// styles
import "./Game.css";

export default function Game() {
  const { id } = useParams();
  const { document, error } = useDocument("games", id);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="game-detail">
      <GameSummary game={document} />
    </div>
  );
}
