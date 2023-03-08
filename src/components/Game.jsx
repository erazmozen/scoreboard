function Game({ game, updateScoreHome, updateScoreAway }) {
  return (
    <div className="game">
      <p>{game.teamHome.team}</p>
      <p onClick={() => updateScoreHome(game.id)}>
        {game.teamHome.score}
      </p>
      <p>vs</p>
      <p onClick={() => updateScoreAway(game.id)}>
        {game.teamAway.score}
      </p>
      <p>{game.teamAway.team}</p>
    </div>
  );
}

export default Game;
