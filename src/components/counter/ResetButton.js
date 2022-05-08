import React, { Component } from "react";
import classes from "./ResetButton.module.css";

class ResetButton extends Component {
  render() {
    return (
      <div>
        <button className={classes.reset} onClick={this.props.resetHandler}>
          Reset
        </button>
      </div>
    );
  }
}

export default ResetButton;
