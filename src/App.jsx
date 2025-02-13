import { useState } from "react";
import { nanoid } from "nanoid";

import Die from "./Die";
import "./App.css";

export default function App() {
  const [board, setBoard] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: true,
      id: nanoid(),
    }));
  }

  function onRoll() {
    setBoard(generateAllNewDice());
  }

  return (
    <main>
      <div className="board">
        {board.map(({ id, value, isHeld }) => (
          <Die key={id} value={value} isHeld={isHeld} />
        ))}
      </div>

      <button className="roll" onClick={onRoll}>
        Roll
      </button>
    </main>
  );
}
