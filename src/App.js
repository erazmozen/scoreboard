import { useState } from "react";
import "./App.css";
import LiveScore from "./components/LiveScore";
import Summary from "./components/Summary";
import { data } from "./data/data";

function App() {
  const [gameStatus, setGameStatus] = useState(false);
  const [games, setGames] = useState(data);

  function startGames(duration = 5000) {
    console.log("Starting games");
    setGameStatus((prev) => !prev);

    setGames(data);

    setTimeout(() => {
      setGameStatus(false);
      console.log("Ending games");
    }, duration);
  }

  return (
    <div>
      <LiveScore
        startGames={startGames}
        gameStatus={gameStatus}
        games={games}
      />
      <Summary />
    </div>
  );
}

export default App;
