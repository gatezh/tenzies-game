import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

import Die from "./Die";
import "./App.css";

export default function App() {
  const [board, setBoard] = useState(() => generateAllNewDice());
  const actionButton = useRef(null);

  const isGameWon = checkGameWon();
  const { width, height } = useWindowSize()

  useEffect(() => {
    isGameWon && actionButton.current.focus()
  }, [isGameWon])

  function checkGameWon() {
    return board.every(isHeld) && board.every(isEqual);

    function isHeld(die) {
      return die.isHeld == true
    }

    function isEqual(die) {
      return die.value == board[0].value
    }
  }

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function onRoll() {
    setBoard((oldBoard) => {
      if (isGameWon) {
        return generateAllNewDice()
      }

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
      {isGameWon && 
        <Confetti
          width={width}
          height={height}
        />
      }
      <header>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </header>
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

      <button
        ref={actionButton}
        className="roll"
        onClick={onRoll}>
        {isGameWon ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}
