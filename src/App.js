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

  function startGames(duration = 10000) {
    console.log("Starting games");
    setGameStatus((prev) => !prev);

    setRound((prev) => prev + 1);

    setGames(data);

    const randomUpdateOne = setInterval(() => {
      updateScoreAway(1);
      updateScoreHome(2);
    }, Math.floor(Math.random() * duration) + 1);
    const randomUpdateTwo = setInterval(() => {
      updateScoreAway(1);
      updateScoreAway(2);
    }, Math.floor(Math.random() * duration) + 1);
    const randomUpdateThree = setInterval(() => {
      updateScoreHome(1);
      updateScoreAway(3);
    }, Math.floor(Math.random() * duration) + 1);

    setTimeout(() => {
      setGameStatus(false);

      clearInterval(randomUpdateOne);
      clearInterval(randomUpdateTwo);
      clearInterval(randomUpdateThree);

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
