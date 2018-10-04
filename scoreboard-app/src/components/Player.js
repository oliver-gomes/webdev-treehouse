import React from "react";

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">Guil</span>
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score" />
        <button className="counter-action increment"> + </button>
      </div>
    </div>
  );
};

export default Player;
