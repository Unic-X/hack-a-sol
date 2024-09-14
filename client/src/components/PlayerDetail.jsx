import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PlayerDetail = ({ players }) => {
  const { id } = useParams();
  const player = players.find(p => p.playerId === parseInt(id));

  if (!player) {
    return <p>Player not found</p>;
  }

  return (
    <div className="player-detail">
      <h1>{player.name}</h1>
      <img src={player.image} alt={player.name} className="player-detail-image" />
      <p>{player.bio}</p>
      <Link to="/">Back to Player List</Link>
    </div>
  );
};

export default PlayerDetail;
