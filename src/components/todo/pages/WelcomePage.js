import React, { Component } from "react";
import { Link } from "react-router-dom";

class WelcomePage extends Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.params.username}! to your Todo Application. <br />
          You can manage your todos <Link to="/todos">here</Link>.
        </div>
      </>
    );
  }
}

export default WelcomePage;
