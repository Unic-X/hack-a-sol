import React from 'react';
import { Link } from 'react-router-dom';

const players = [
  { id: 1, name: 'Player One', sport: 'Football', position: 'Forward', imageUrl: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Player Two', sport: 'Basketball', position: 'Guard', imageUrl: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Player Three', sport: 'Tennis', position: 'Singles', imageUrl: 'https://via.placeholder.com/200' },
  { id: 4, name: 'Player Four', sport: 'Cricket', position: 'Batsman', imageUrl: 'https://via.placeholder.com/200' },
  { id: 5, name: 'Player Five', sport: 'Baseball', position: 'Pitcher', imageUrl: 'https://via.placeholder.com/200' },
  { id: 6, name: 'Player Six', sport: 'Hockey', position: 'Goalkeeper', imageUrl: 'https://via.placeholder.com/200' }
];

function HomePage() {
  return (
    <div className="player-container">
      <div className="search-bar">
        <input type="text" placeholder="Search Players" />
      </div>
      <div className="player-grid">
        {players.map((player) => (
          <Link to={`/player/${player.id}`} key={player.id} className="player-link">
            <div className="player-card">
              <div className="player-image" style={{ backgroundImage: `url(${player.imageUrl})` }}></div>
              <div className="player-name">{player.name}</div>
              <div className="player-tags">
                <span className="tag">{player.sport}</span>
                <span className="tag">{player.position}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
