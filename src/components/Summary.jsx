const Summary = ({ games }) => {
  const sortedGames = [...games].sort(
    (a, b) => b.gameTotalScore - a.gameTotalScore
  );
  console.log("Sorted games", sortedGames);
  return <h1>Summary</h1>;
};

export default Summary;
