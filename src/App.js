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

  function updateScoreHome(id) {
    setGames((prev) =>
      prev.map((game) =>
        game.id === id
          ? {
              ...game,
              teamHome: {
                ...game.teamHome,
                score: game.teamHome.score + 1,
              },
              gameTotalScore: game.gameTotalScore + 1,
            }
          : { ...game }
      )
    );
  }

  function updateScoreAway(id) {
    setGames((prev) =>
      prev.map((game) =>
        game.id === id
          ? {
              ...game,
              teamAway: {
                ...game.teamAway,
                score: game.teamAway.score + 1,
              },
              gameTotalScore: game.gameTotalScore + 1,
            }
          : { ...game }
      )
    );
  }

  console.log("Games", games);

  return (
    <div>
      <LiveScore
        startGames={startGames}
        gameStatus={gameStatus}
        updateScoreAway={updateScoreAway}
        updateScoreHome={updateScoreHome}
        games={games}
      />
      <Summary games={games} />
    </div>
  );
}

export default App;
