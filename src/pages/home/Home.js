import { useCollection } from "../../hooks/useCollection";
import GameList from "../../components/gamesList/GamesList";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

// styles
import "./Home.css";

export default function Home() {
  const { documents, error } = useCollection("games");
  const { user } = useAuthContext();

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {documents && <GameList games={documents} />}
    </div>
  );
}
