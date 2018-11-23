import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TestForm from "./TestForm";
import Done from "./Done";

class App extends Component {
  state = { done: false };

  render() {
    return (
      <div className="App">
        <header>
          <h1> 2-4-6 game </h1>
        </header>
        
        {this.state.done ? (
          <Done />
        ) : (
          <TestForm onDone={() => this.setState({ done: true })} />
        )}
      </div>
    );
  }
}

export default App;
