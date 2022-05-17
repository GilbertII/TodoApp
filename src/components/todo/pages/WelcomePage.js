import React, { Component } from "react";

class WelcomePage extends Component {
  render() {
    return <div>Welcome to Todo Application {this.props.params.name}</div>;
  }
}

export default WelcomePage;
