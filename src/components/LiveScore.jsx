function Game({ game }) {
  return (
    <div className="game-wrapper">
      <div className="flex-row">
        <p>{game.teamHome.team}</p>
        <p>{game.teamHome.score}</p>
        <p>vs</p>
        <p>{game.teamAway.score}</p>
        <p>{game.teamAway.team}</p>
      </div>
    </div>
  );
}

const LiveScore = ({ games, gameStatus, startGames }) => {
  return (
    <div>
      <h1>LiveScore</h1>
      {!gameStatus ? (
        <h2 onClick={() => startGames()}>
          Click to start games
        </h2>
      ) : (
        <div>
          <h2>Current games</h2>
          {games.map((game) => {
            return <Game key={game.id} game={game} />;
          })}
        </div>
      )}
    </div>
  );
};

export default LiveScore;
