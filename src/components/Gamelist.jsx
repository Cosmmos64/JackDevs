import React, { useState } from 'react';
import Gamecard from "./Gamecard.jsx";
import "./Gamelist.css"

const GameList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className='wrapper'>
      <h1>Games</h1>
      <input
        type='search'
        placeholder='Search games...'
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className='gamelist'>
        {games
          .filter(game => game.text.toLowerCase().includes(searchTerm))
          .map((game, index) => (
            <Gamecard
              key={index}
              imgUrl={game.imgurl}
              gameUrl={game.gameurl}
              gameText={game.text}
            />
          ))}
      </div>
    </div>
  );
};

const games = [
  { gameurl: "./webretro/index.html?core=mgba&rom=Pokemonemerald.gba", imgurl: "./covers/Pokemon---Emerald-Version--USA--Europe-.png", text: "Pokemon Emerald" },
  { gameurl: "./webretro/index.html?core=mgba&rom=Pokemonruby.gba", imgurl: "./covers/Pokemon---Ruby-Version--USA--Europe---Rev-2-.png", text: "Pokemon Ruby" },
  { gameurl: "./webretro/index.html?core=mgba&rom=Pokemonfirered.gba", imgurl: "./covers/Pokemon---Fire-Red-Version--USA-.png", text: "Pokemon Fire Red" },
  { gameurl: "./webretro/index.html?core=mgba&rom=Pokemonleafgreen.gba", imgurl: "./covers/Pokemon---Leaf-Green-Version--USA-.png", text: "Pokemon Leaf Green" },
  { gameurl: "./webretro/index.html?core=nestopia&rom=Supermariobros.nes", imgurl: "./covers/Super-Mario-Bros.--JU-----.jpg", text: "Super Mario Bros." },
  { gameurl: "./webretro/index.html?core=nestopia&rom=Supermariobros2.nes", imgurl: "./covers/Super-Mario-Bros.-2--U---PRG1-----.jpg", text: "Super Mario Bros. 2" },
  { gameurl: "./webretro/index.html?core=nestopia&rom=Supermariobros3.nes", imgurl: "./covers/Super-Mario-Bros.-3--U---PRG1-----.jpg", text: "Super Mario Bros. 3" },
  { gameurl: "./webretro/index.html?core=nestopia&rom=Metroid.nes", imgurl: "./covers/Metroid--U---PRG0-----.jpg", text: "Metroid" },
  { gameurl: "./webretro/index.html?core=nestopia&rom=Legendofzelda.nes", imgurl: "./covers/Legend-of-Zelda--The--U---PRG1-----.jpg", text: "Legend of Zelda" },
  { gameurl: "./webretro/index.html?core=nestopia&rom=Punchout.nes", imgurl: "./covers/Mike-Tyson-s-Punch-Out----U---PRG1-----.jpg", text: "Punch Out" },
  { gameurl: "./webretro/index.html?core=nestopia&rom=Tetris.nes", imgurl: "./covers/Tetris_NES_cover_art.jpg", text: "Tetris" },
  { gameurl: "./webretro/index.html?core=Snes9x&rom=Ultimatemortalkombat3.sfc", imgurl: "./covers/Ultimate-Mortal-Kombat-3--USA-.JPG", text: "Ult. Mortal Kombat 3" },
  { gameurl: "./webretro/index.html?core=Snes9x&rom=Supermetroid.sfc", imgurl: "./covers/Super-Metroid--Japan--USA-.jpg", text: "Super Metroid" },
  { gameurl: "./webretro/index.html?core=snes9x&rom=Supermarioworld.smc", imgurl: "./covers/Super-Mario-World--USA-.jpg", text: "Super Mario World" },
];

export default GameList;