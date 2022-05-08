import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CounterButton.module.css";

class CounterButton extends Component {
  constructor() {
    super();

    // bind function
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
  }

  incrementHandler() {
    this.props.sumIncrementHandler(this.props.incBy);
  }

  decrementHandler() {
    this.props.sumDecrementHandler(this.props.incBy);
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementHandler}>+{this.props.incBy}</button>
        <button onClick={this.decrementHandler}>-{this.props.incBy}</button>
      </div>
    );
  }
}

CounterButton.defaultProps = {
  incBy: 1,
};

CounterButton.propTypes = {
  incBy: PropTypes.number,
};

export default CounterButton;
