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

export default Game;
