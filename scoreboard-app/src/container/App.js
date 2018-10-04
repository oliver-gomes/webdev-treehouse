import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";
import Player from "../components/Player";

class App extends Component {
  state = {
    players: [
      {
        name: "Harry",
        id: 1
      },
      {
        name: "Cedric",
        id: 2
      },
      {
        name: "Krum",
        id: 3
      },
      {
        name: "Fleur",
        id: 4
      }
    ]
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        {this.state.players.map(player => (
          <Player
            key={player.id.toString()}
            id={player.id}
            name={player.name}
            score={player.score}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;
