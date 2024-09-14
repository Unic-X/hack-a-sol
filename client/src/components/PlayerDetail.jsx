import React from 'react';
import { useParams } from 'react-router-dom';
import './PlayerDetail.css'; // Custom CSS to style like Cricbuzz or ESPNcricinfo

const PlayerDetail = ({ players }) => {
  const { id } = useParams();
  const player = players.find((p) => p.playerId === parseInt(id));

  if (!player) {
    return <p>Player not found</p>;
  }

  return (
    <div className="player-detail-container">
      <div className="player-detail-left">
        <img src={player.image} alt={player.name} className="player-detail-image" />
        <div className="personal-info">
          <h2>{player.name}</h2>
          <p><strong>Country:</strong> {player.country}</p>
          <p><strong>Playing Role:</strong> {player.role}</p>
          <p><strong>Batting Style:</strong> {player.battingStyle}</p>
          <p><strong>Bowling Style:</strong> {player.bowlingStyle}</p>
          <p><strong>Age:</strong> {player.age}</p>
        </div>
      </div>

      <div className="player-detail-right">
        <h3>Career Statistics</h3>
        <table className="career-stats">
          <thead>
            <tr>
              <th>Matches</th>
              <th>Runs</th>
              <th>HS</th>
              <th>Ave</th>
              <th>BF</th>
              <th>SR</th>
              <th>100s</th>
              <th>50s</th>
              <th>4s</th>
              <th>6s</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{player.matches}</td>
              <td>{player.runs}</td>
              <td>{player.highestScore}</td>
              <td>{player.average}</td>
              <td>{player.ballsFaced}</td>
              <td>{player.strikeRate}</td>
              <td>{player.hundreds}</td>
              <td>{player.fifties}</td>
              <td>{player.fours}</td>
              <td>{player.sixes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerDetail;
