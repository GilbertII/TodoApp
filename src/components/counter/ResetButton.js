import React, { Component } from "react";
import classes from "./ResetButton.module.css";

class ResetButton extends Component {
  constructor() {
    super();

    this.resetHandler = this.resetHandler.bind(this);
  }

  resetHandler() {
    this.props.resetHandler();
  }

  render() {
    return (
      <div>
        <button className={classes.reset} onClick={this.resetHandler}>
          Reset
        </button>
      </div>
    );
  }
}

export default ResetButton;
