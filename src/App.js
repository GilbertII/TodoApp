import React, { Component } from "react";
import Counter from "./components/counter/Counter";

import "./App.css";
import TodoApp from "./components/todo/TodoApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}

export default App;
