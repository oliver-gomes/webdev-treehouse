import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";
import Player from "../components/Player";
import { players } from "../components/players";

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={1} />

        <Player name="Harry" score={50} />
        <Player name="Cedric" score={45} />
        <Player name="Krum" score={35} />
        <Player name="Fleur" score={20} />
      </div>
    );
  }
}

export default App;
