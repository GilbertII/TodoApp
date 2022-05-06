import React, { Component } from "react";

import FirstComponent from "./components/example/FirstComponent";
import SecondComponent from "./components/example/SecondComponent";
import ThirdComponent from "./components/example/ThirdComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        Todo Application
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}

class FirstComp extends Component {
  render() {
    return <div>First Component</div>;
  }
}

class SecondsComp extends Component {
  render() {
    return <div>Second Component</div>;
  }
}

function ThirdComp() {
  return <div>Third Component</div>;
}

export default App;
