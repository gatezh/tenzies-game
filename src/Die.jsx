export default function Die(props) {
  return (
    <button className={`die ${props.isHeld ? "isHeld" : null}`}>
      {props.value}
    </button>
  );
}
