import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";
import Player from "../components/Player";
import { players } from "../components/players";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers={this.props.initialPlayers.players.length}
        />
        {this.props.initialPlayers.players.map(player => (
          <Player
            key={player.id.toString()}
            name={player.name}
            score={player.score}
          />
        ))}
      </div>
    );
  }
}

export default App;
