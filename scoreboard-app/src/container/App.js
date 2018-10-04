import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";
import Player from "../components/Player";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Player />
      </div>
    );
  }
}

export default App;
