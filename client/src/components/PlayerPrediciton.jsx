
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PlayerPrediciton.css';

export default function PlayerPrediction() {

  const [a, setA] = useState();
  const [b, setB] = useState();
  const location = useLocation();
  const { player } = location.state;

  const predict = async () => {
    const response = await fetch('http://localhost:5000/predict', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        player : player['Player Name'],
        oppteam : "Pakistan"
      })
    });


    const json = await response.json();
    console.log(json)
    setA(json.run_scored)
    setB(json.sr)
  }

  useEffect(()=>{
        predict();
    })

  return (
    <div className="prediction-container">
      <h1>Player Prediction for {player['Full Name']}</h1>
      <p>Here you will display your prediction logic for the player's performance.</p>
        Predicted Score: {a} with a Strike rate of: {b}
    </div>
  );
}

