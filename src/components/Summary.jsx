const Summary = ({ games }) => {
  const sortedGames = [...games].sort((a, b) => {
    if (b.gameTotalScore == a.gameTotalScore) {
      return b.gameEndedTime - a.gameEndedTime;
    } else {
      return b.gameTotalScore - a.gameTotalScore;
    }
  });
  console.log("Sorted games", sortedGames);
  return (
    <div className="summary">
      <h1>Summary</h1>
      <div className="summary-wrapper">
        {sortedGames.map((game) => (
          <div key={game.id}>
            <p>{game.teamHome.team} vs</p>
            <p>{game.teamAway.team}</p>
            <p>{game.teamHome.score}</p>
            <p>{game.teamAway.score}</p>
            <h4>Total: {game.gameTotalScore}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
