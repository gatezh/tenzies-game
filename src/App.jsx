import Die from "./Die";
import "./App.css";

export default function App() {
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
