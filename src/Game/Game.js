import { useState } from "react";
import Cell from "../Cell/Cell";

const Game = (props) => {
  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [xisNext, setXIsNext] = useState(true);
  const winningCombination = [];
  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";

  const cellClicked = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellValues = [...cellValues];

      newCellValues[cellIndex] = xisNext ? "X" : "O";
      setCellValues(newCellValues);
      setXIsNext(!xisNext);
    }
  };

  const cells = cellValues.map((value, index) => {
    const canHighlight = winningCombination.indexOf(index) >= 0;
    return (
      <Cell
        key={index}
        value={value}
        canHighlight={canHighlight}
        onClick={() => cellClicked(index)}
      />
    );
  });
  return (
    <div id="game">
      <h1>Tic Tac Toe</h1>
      <div id="board">{cells}</div>
    </div>
  );
};

export default Game;
