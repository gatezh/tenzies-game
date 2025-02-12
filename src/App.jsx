import Die from "./Die";
import "./App.css";

export default function App() {
  // Generate a new set of dice
  let newRoll = new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));

  console.log(newRoll);

  return (
    <main>
      <div className="board">
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={3} />
        <Die value={2} />
        <Die value={4} />
        <Die value={4} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
      </div>
    </main>
  );
}
