import { useState, useEffect } from "react";
import "./App.css";
import LiveScore from "./components/LiveScore";
import Summary from "./components/Summary";
import { data } from "./data/data";

function App() {
  const [round, setRound] = useState(0);

  const lStorageData = JSON.parse(
    localStorage.getItem(`games-data-${round}`)
  );

  const [gameStatus, setGameStatus] = useState(false);
  const [games, setGames] = useState(lStorageData ?? data);

  function startGames(duration = 5000) {
    console.log("Starting games");
    setGameStatus((prev) => !prev);

    setRound((prev) => prev + 1);

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

  useEffect(() => {
    window.localStorage.setItem(
      `games-data-${round}`,
      JSON.stringify(games)
    );
  }, [gameStatus]);

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
