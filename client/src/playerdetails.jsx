import React from 'react';
import { useParams } from 'react-router-dom';

const players = [
  { id: 1, name: 'Player One', sport: 'Football', position: 'Forward', imageUrl: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Player Two', sport: 'Basketball', position: 'Guard', imageUrl: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Player Three', sport: 'Tennis', position: 'Singles', imageUrl: 'https://via.placeholder.com/200' },
  { id: 4, name: 'Player Four', sport: 'Cricket', position: 'Batsman', imageUrl: 'https://via.placeholder.com/200' },
  { id: 5, name: 'Player Five', sport: 'Baseball', position: 'Pitcher', imageUrl: 'https://via.placeholder.com/200' },
  { id: 6, name: 'Player Six', sport: 'Hockey', position: 'Goalkeeper', imageUrl: 'https://via.placeholder.com/200' }
];

function PlayerDetailsPage() {
  const { id } = useParams();
  const player = players.find(p => p.id === parseInt(id));

  if (!player) return <div>Player not found</div>;

  return (
    <div className="player-container">
      <div className="player-card">
        <div className="player-image" style={{ backgroundImage: `url(${player.imageUrl})` }}></div>
        <div className="player-name">{player.name}</div>
        <div className="player-tags">
          <span className="tag">{player.sport}</span>
          <span className="tag">{player.position}</span>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetailsPage;
