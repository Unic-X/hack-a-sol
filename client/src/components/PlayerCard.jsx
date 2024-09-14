// components/PlayerCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Players.css';

const PlayerCard = ({ player }) => {
  return (
    <li className="books">
      <article className="card">
        <Link to={`/player/${player.playerId}`} className="no-underline">
          <img
            src={player.image}
            alt={player.name}
            className="player-image"
          />
          <section className="card-s">
            <h5>{player.name}</h5>
          </section>
        </Link>
      </article>
    </li>
  );
};

export default PlayerCard;
