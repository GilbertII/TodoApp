import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./CounterLabel.module.css";

class CounterLabel extends Component {
  render() {
    return (
      <div>
        <span className={classes.count}>{this.props.totalInc}</span>
      </div>
    );
  }
}

CounterLabel.defaultProps = {
  totalInc: 0,
};

CounterLabel.propTypes = {
  totalInc: PropTypes.number,
};

export default CounterLabel;
