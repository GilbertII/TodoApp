import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CounterButton.module.css";

class CounterButton extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.incrementHandler(this.props.incBy)}>
          +{this.props.incBy}
        </button>
        <button onClick={() => this.props.decrementHandler(this.props.incBy)}>
          -{this.props.incBy}
        </button>
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
