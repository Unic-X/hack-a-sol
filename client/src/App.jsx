// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerList from './Players';
// import PlayerDetail from './components/PlayerDetail';
import PlayerProfile from './components/PlayerProfile';





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlayerList />} />
        <Route path="/player/:id" element={<PlayerProfile />} />
      </Routes>
    </Router>
  );
};

export default App;

