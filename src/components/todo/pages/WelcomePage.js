import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../../api/todo/HelloWorldService";

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.state = {
      welcomeMessage: "",
    };
  }

  retrieveWelcomeMessage() {
    console.log("Welcome Message here!");
    HelloWorldService.executeHelloWorldService().then((res) => {
      console.log(res);
      this.setState(() => {
        return { welcomeMessage: res.data };
      });
    });
  }

  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.params.username}! to your Todo Application. <br />
          You can manage your todos <Link to="/todos">here</Link>.
        </div>
        <div className="container">
          Click here to get customize Welcome page.
          <button className="btn btn-primary" onClick={this.retrieveWelcomeMessage}>
            Get Welcome Message
          </button>
        </div>
        <div className="container">{this.state.welcomeMessage}</div>
      </>
    );
  }
}

export default WelcomePage;
