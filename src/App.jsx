import { useState } from "react";
import Die from "./Die";
import "./App.css";

export default function App() {
  const [board, setBoard] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  function onRoll() {
    setBoard(generateAllNewDice());
  }

  return (
    <main>
      <div className="board">
        {board.map((num) => (
          <Die value={num} />
        ))}
      </div>

      <button className="roll" onClick={onRoll}>
        Roll
      </button>
    </main>
  );
}
