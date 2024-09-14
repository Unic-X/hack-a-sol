import React, { useState } from 'react';
import './Players.css'; // Custom CSS for player cards and background
import PlayerCard from './components/PlayerCard';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

const PlayerList = ({ players }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wrapper">
      <h1 className="page-title headline">Players</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search players..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <ul className="grid-list">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <li key={player.playerId} className="player-card">
              <Link to={`/player/${player.playerId}`}>
                <PlayerCard player={player} />
              </Link>
            </li>
          ))
        ) : (
          <p>No players found</p>
        )}
      </ul>
    </div>
  );
};

export default PlayerList;
