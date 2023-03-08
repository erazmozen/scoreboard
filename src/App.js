import { useState } from "react";
import "./App.css";
import LiveScore from "./components/LiveScore";
import Summary from "./components/Summary";
import { data } from "./data/data";

function App() {
  const [gameStatus, setGameStatus] = useState(false);
  const [games, setGames] = useState(data);

  return (
    <div>
      <LiveScore gameStatus={gameStatus} games={games} />
      <Summary />
    </div>
  );
}

export default App;
