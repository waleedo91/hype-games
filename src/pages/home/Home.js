import { useCollection } from "../../hooks/useCollection";
import GameList from "../../components/gamesList/GamesList";


// styles
import "./Home.css";

export default function Home() {
  const { documents, error } = useCollection("games");

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {documents && <GameList games={documents} />}
    </div>
  );
}
