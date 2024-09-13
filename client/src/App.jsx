import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PlayerInfo from './PlayerInfo'; // Import new PlayerInfo page

function App() {
  const players = [
    { id: 1, name: 'Player 1', sport: 'Basketball', position: 'Forward' },
    { id: 2, name: 'Player 2', sport: 'Football', position: 'Goalkeeper' },
    { id: 3, name: 'Player 3', sport: 'Tennis', position: 'Single' },
    { id: 5, name: 'Player 1', sport: 'Basketball', position: 'Forward' },
    { id: 7, name: 'Player 1', sport: 'Basketball', position: 'Forward' },
    { id: 9, name: 'Player 1', sport: 'Basketball', position: 'Forward' },

  ];

  return (
    <Router>
      <div className="player-container">
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <div className="search-bar">
                  <input type="text" placeholder="Search Players" />
                </div>
                <div className="player-grid">
                  {players.map((player) => (
                    <Link to={`/player/${player.id}`} key={player.id} className="player-card">
                      <div className="player-image"></div>
                      <div className="player-name">{player.name}</div>
                      <div className="player-tags">
                        <span className="tag">{player.sport}</span>
                        <span className="tag">{player.position}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            }
          />
          {/* Player info page */}
          <Route path="/player/:id" element={<PlayerInfo players={players} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
