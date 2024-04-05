import "./Gamecard.css";
import React from 'react';
import { Link } from 'react-router-dom';

const Gamecard = ({ imgUrl, core, rom, gameText, }) => {
  return (
    <div className="Gamecard">
      <Link to={`/game?core=${core}&rom=${rom}`}><img src={imgUrl} /></Link>
      <Link to={`/game?core=${core}&rom=${rom}`}><p>{gameText}</p></Link>
    </div>
  );
}

export default Gamecard;
