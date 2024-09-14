// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerList from './Players';
import PlayerDetail from './components/PlayerDetail';

const playerData = {
  players: [
    {
      playerId: 1,
      name: "Virat Kohli",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg",
      bio: "Indian cricketer and former captain of the Indian national team."
    },
    {
      playerId: 2,
      name: "MS Dhoni",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/MS_Dhoni.jpg",
      bio: "Former captain of the Indian national team and a successful wicket-keeper."
    },
    {
      playerId: 3,
      name: "Rohit Sharma",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Rohit_Gurunath_Sharma.jpg",
      bio: "Indian cricketer who plays as an opening batsman."
    },
    // Add more players as needed
  ],
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlayerList players={playerData.players} />} />
        <Route path="/player/:id" element={<PlayerDetail players={playerData.players} />} />
      </Routes>
    </Router>
  );
};

export default App;
