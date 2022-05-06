import classes from "./Counter.module.css";

function Counter() {
  return (
    <div>
      <button>+1</button>
      <span className={classes.count}>0</span>
    </div>
  );
}

export default Counter;
