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
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  incrementHandler(incBy) {
    this.setState((prevState) => {
      return { totalCounter: prevState.totalCounter + incBy };
    });
    console.log(`increment by ${incBy}`);
  }

  decrementHandler(incBy) {
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
          incBy={1000}
          incrementHandler={this.incrementHandler}
          decrementHandler={this.decrementHandler}
        />
        <CounterButton
          incBy={100}
          incrementHandler={this.incrementHandler}
          decrementHandler={this.decrementHandler}
        />
        <CounterButton
          incBy={10}
          incrementHandler={this.incrementHandler}
          decrementHandler={this.decrementHandler}
        />{" "}
        <CounterButton
          incBy={1}
          incrementHandler={this.incrementHandler}
          decrementHandler={this.decrementHandler}
        />
        <CounterLabel totalInc={this.state.totalCounter} />
        <ResetButton resetHandler={this.resetHandler} />
      </div>
    );
  }
}

export default Counter;
