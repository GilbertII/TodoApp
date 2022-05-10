import React, { Component } from "react";

import FirstComponent from "./FirstComponent";
import SecondComponent from "./FirstComponent";
import ThirdComponent from "./FirstComponent";

class ExampleComponent extends Component {
  render() {
    return (
      <div className="App">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}

export default ExampleComponent;
