import classes from "./Counter.module.css";

function Counter() {
  let count = 0;
  function onClickHandler() {
    count++;
    console.log(count);
  }

  return (
    <div>
      <button onClick={onClickHandler}>+1</button>
      <span className={classes.count}>0</span>
    </div>
  );
}

export default Counter;
