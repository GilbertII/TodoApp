import React, { Component } from "react";
import CounterButton from "./CounterButton";
import CounterLabel from "./CounterLabel";
import ResetButton from "./ResetButton";

import "./Counter.module.css";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      totalCounter: 0,
    };

    // bind function
    this.sumIncrementHandler = this.sumIncrementHandler.bind(this);
    this.sumDecrementHandler = this.sumDecrementHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  sumIncrementHandler(incBy) {
    this.setState((prevState) => {
      return { totalCounter: prevState.totalCounter + incBy };
    });
    console.log(`increment by ${incBy}`);
  }

  sumDecrementHandler(incBy) {
    this.setState((prevState) => {
      return { totalCounter: prevState.totalCounter - incBy };
    });
    console.log(`decrement by ${incBy}`);
  }

  resetHandler() {
    this.setState(() => {
      return { totalCounter: 0 };
    });
    console.log(`reset value`);
  }

  render() {
    return (
      <div>
        <CounterButton
          incBy={1}
          sumIncrementHandler={this.sumIncrementHandler}
          sumDecrementHandler={this.sumDecrementHandler}
        />
        <CounterButton
          incBy={2}
          sumIncrementHandler={this.sumIncrementHandler}
          sumDecrementHandler={this.sumDecrementHandler}
        />
        <CounterButton
          incBy={3}
          sumIncrementHandler={this.sumIncrementHandler}
          sumDecrementHandler={this.sumDecrementHandler}
        />
        <CounterLabel totalInc={this.state.totalCounter} />
        <ResetButton resetHandler={this.resetHandler} />
      </div>
    );
  }
}

export default Counter;
