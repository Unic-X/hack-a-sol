import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function PlayerInfo({ players }) {
  const { id } = useParams(); // Get the player id from the URLa
  const player = players.find((p) => p.id === parseInt(id)); // Find the player based on the id

  if (!player) {
    return <h2>Player not found</h2>;
  }

  return (
    <div className="player-info-container">
      <div className="player-info-card">
        <div className="player-image"></div>
        <h2>{player.name}</h2>
        <p>Sport: {player.sport}</p>
        <p>Position: {player.position}</p>
      </div>
    </div>
  );
}

export default PlayerInfo;
