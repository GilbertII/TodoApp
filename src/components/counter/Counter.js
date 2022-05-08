import React, { Component } from "react";
import CounterButton from "./CounterButton";
import CounterLabel from "./CounterLabel";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      totalCounter: 0,
    };

    // bind function
    this.sumIncreamentHandler = this.sumIncreamentHandler.bind(this);
  }

  sumIncreamentHandler(incBy) {
    this.setState((prevState) => {
      return { totalCounter: prevState.totalCounter + incBy };
    });
    console.log(incBy);
  }

  render() {
    return (
      <div>
        <CounterButton incBy={1} sumIncreamentHandler={this.sumIncreamentHandler} />
        <CounterButton incBy={2} sumIncreamentHandler={this.sumIncreamentHandler} />
        <CounterButton incBy={3} sumIncreamentHandler={this.sumIncreamentHandler} />
        <CounterLabel totalInc={this.state.totalCounter} />
      </div>
    );
  }
}

export default Counter;
