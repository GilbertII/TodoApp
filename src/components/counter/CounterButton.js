import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CounterButton.module.css";

class CounterButton extends Component {
  constructor() {
    super();

    // bind function
    this.increamentHandler = this.increamentHandler.bind(this);
  }

  increamentHandler() {
    this.props.sumIncreamentHandler(this.props.incBy);
  }

  render() {
    return (
      <div>
        <button onClick={this.increamentHandler}>+{this.props.incBy}</button>
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
