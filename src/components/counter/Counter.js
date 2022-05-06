import { Component, useState } from "react";
import classes from "./Counter.module.css";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    // bind function
    this.increamentHandler = this.increamentHandler.bind(this);
  }

  increamentHandler() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.increamentHandler}>+1</button>
        <span className={classes.count}>{this.state.counter}</span>
      </div>
    );
  }
}

/*
// Function Format
function Counter() {
  const [count, setCount] = useState(0);

  function onClickHandler() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={onClickHandler}>+1</button>
      <span className={classes.count}>{count}</span>
    </div>
  );
}
*/
export default Counter;
