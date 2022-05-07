import React, { Component } from "react";

import FirstComponent from "./components/example/FirstComponent";
import SecondComponent from "./components/example/SecondComponent";
import ThirdComponent from "./components/example/ThirdComponent";
import "./App.css";
import Counter from "./components/counter/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExampleComponent />
      </div>
    );
  }
}

class ExampleComponent extends Component {
  render() {
    return (
      <div className="App">
        <Counter incBy={1} />
        <Counter incBy={5} />
        <Counter incBy={10} />
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
