import React, { useState } from 'react';
import './Players.css'; // Custom CSS for player cards and background
import PlayerCard from './components/PlayerCard';

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
            <PlayerCard key={player.playerId} player={player} />
          ))
        ) : (
          <p>No players found</p>
        )}
      </ul>
    </div>
  );
};

export default PlayerList;
