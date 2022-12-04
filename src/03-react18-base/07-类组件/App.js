import React, { Component } from "react";
import "./App.css";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <div className="app">
        <User name="黑土" age="24" gender={"男"} />
      </div>
    );
  }
}

export default App;
