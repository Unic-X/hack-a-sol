// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerList from './Players';
// import PlayerDetail from './components/PlayerDetail';
import PlayerProfile from './components/PlayerProfile';

const playerData = {
  players: [
    {
      playerId: 1,
      name: "Virat Kohli",
      image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/316600/316605.png",
      country: "India",
      playingRole: "Batsman",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm medium",
      age: 34,
      careerStats: {
        matches: 260,
        runs: 12345,
        HS: 183,
        Ave: 53.2,
        BF: 13960,
        SR: 88.4,
        hundreds: 43,
        fifties: 62,
        fours: 1154,
        sixes: 120,
      },
    },
    {
      playerId: 2,
      name: "MS Dhoni",
      image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/319900/319946.png",
      country: "India",
      playingRole: "Wicketkeeper Batsman",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm medium",
      age: 41,
      careerStats: {
        matches: 350,
        runs: 10773,
        HS: 183,
        Ave: 50.6,
        BF: 12303,
        SR: 87.6,
        hundreds: 10,
        fifties: 73,
        fours: 826,
        sixes: 229,
      },
    },
    {
      playerId: 3,
      name: "Rohit Sharma",
      image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/385800/385819.png",
      country: "India",
      playingRole: "Batsman",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm offbreak",
      age: 36,
      careerStats: {
        matches: 235,
        runs: 9205,
        HS: 264,
        Ave: 48.9,
        BF: 10220,
        SR: 90.1,
        hundreds: 29,
        fifties: 43,
        fours: 832,
        sixes: 250,
      },
    },
    {
      playerId: 4,
      name: "AB de Villiers",
      image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/316500/316555.png",
      country: "South Africa",
      playingRole: "Batsman",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm medium",
      age: 39,
      careerStats: {
        matches: 228,
        runs: 9577,
        HS: 176,
        Ave: 53.5,
        BF: 9475,
        SR: 101.1,
        hundreds: 25,
        fifties: 53,
        fours: 840,
        sixes: 204,
      },
    },
    {
      playerId: 5,
      name: "David Warner",
      image: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/316500/316589.png",
      country: "Australia",
      playingRole: "Batsman",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Right-arm leg break",
      age: 37,
      careerStats: {
        matches: 142,
        runs: 6000,
        HS: 179,
        Ave: 45.6,
        BF: 6400,
        SR: 93.8,
        hundreds: 18,
        fifties: 37,
        fours: 650,
        sixes: 100,
      },
    },
    {
      playerId: 6,
      name: "Jasprit Bumrah",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Jasprit_Bumrah.jpg",
      country: "India",
      playingRole: "Bowler",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm fast",
      age: 30,
      careerStats: {
        matches: 74,
        runs: 35,
        HS: 10,
        Ave: 5.83,
        BF: 70,
        SR: 50.0,
        hundreds: 0,
        fifties: 0,
        fours: 4,
        sixes: 1,
      },
    },
  ],
};





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlayerList players={playerData.players} />} />
        <Route path="/player/:id" element={<PlayerProfile players={playerData.players} />} />
      </Routes>
    </Router>
  );
};

export default App;

