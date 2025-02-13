export default function Die(props) {
  return (
    <button
      className={`die ${props.isHeld ? "isHeld" : null}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
