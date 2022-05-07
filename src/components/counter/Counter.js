import { Component, useState } from "react";
import PropTypes from "prop-types";
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
      counter: this.state.counter + this.props.incBy,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.increamentHandler}>+{this.props.incBy}</button>
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

Counter.defaultProps = {
  incBy: 1,
};

Counter.propTypes = {
  incBy: PropTypes.number,
};

export default Counter;
