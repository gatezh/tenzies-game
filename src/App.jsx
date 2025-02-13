import { useState } from "react";
import { nanoid } from "nanoid";

import Die from "./Die";
import "./App.css";

export default function App() {
  const [board, setBoard] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function onRoll() {
    setBoard((oldBoard) => {
      return oldBoard.map((dice) => {
        if (!dice.isHeld) {
          return { ...dice, value: Math.ceil(Math.random() * 6) };
        } else {
          return dice;
        }
      });
    });
  }

  function hold(id) {
    setBoard((prevState) => {
      return prevState.map((dice) => {
        if (dice.id === id) {
          return { ...dice, isHeld: !dice.isHeld };
        } else {
          return dice;
        }
      });
    });
  }

  return (
    <main>
      <div className="board">
        {board.map(({ id, value, isHeld }) => (
          <Die
            key={id}
            value={value}
            isHeld={isHeld}
            onClick={() => hold(id)}
          />
        ))}
      </div>

      <button className="roll" onClick={onRoll}>
        Roll
      </button>
    </main>
  );
}
