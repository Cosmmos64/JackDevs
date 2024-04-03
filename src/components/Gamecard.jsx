import "./Gamecard.css";
import React from 'react';

const Gamecard = ({ imgUrl, gameUrl, gameText, }) => {
  return (
    <div className="Gamecard">
      <a href={gameUrl}><img src={imgUrl} /></a>
      <a href={gameUrl}><p>{gameText}</p></a>
    </div>
  );
}

export default Gamecard;
