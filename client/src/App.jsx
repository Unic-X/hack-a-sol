import React from 'react';
import './App.css';

function App() {
  return (
    <div className="player-container">
      <div className="search-bar">
        <input type="text" placeholder="Search Players" />
      </div>
      <div className="player-grid">
        {/* Player cards */}
        <div className="player-card">
          <div className="player-image"></div>
          <div className="player-name">Player Name</div>
          <div className="player-tags">
            <span className="tag">Sport</span>
            <span className="tag">Position</span>
          </div>
        </div>
        <div className="player-card">
          <div className="player-image"></div>
          <div className="player-name">Player Name</div>
          <div className="player-tags">
            <span className="tag">Sport</span>
            <span className="tag">Position</span>
          </div>
        </div>
        <div className="player-card">
          <div className="player-image"></div>
          <div className="player-name">Player Name</div>
          <div className="player-tags">
            <span className="tag">Sport</span>
            <span className="tag">Position</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
