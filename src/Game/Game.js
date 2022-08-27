import Cell from "../Cell/Cell";

const Game = () => {
  const cellValues = ["X", "X", "X", "O", "X", "O", "X", "O", "X"];
  const winningCombination = [0, 1, 2];

  const cells = cellValues.map((value, index) => {
    const canHighlight =
      winningCombination && winningCombination.indexOf(index) >= 0;
    return <Cell key={index} value={value} canHighlight={canHighlight} />;
  });
  return (
    <div id="game">
      <h1>Tic Tac Toe</h1>
      <div id="board">{cells}</div>
    </div>
  );
};

export default Game;
