import React, { useState } from "react";
import Gamecard from "./Gamecard.jsx";
import "./Gamelist.css";

const GameList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="wrapper">
      <h1>Games</h1>
      <input
        type="search"
        placeholder="Search games..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="gamelist">
        {games
          .filter((game) => game.text.toLowerCase().includes(searchTerm))
          .map((game, index) => (
            <Gamecard
              key={index}
              imgUrl={game.imgurl}
              core={game.core}
              rom={game.rom}
              gameText={game.text}
            />
          ))}
      </div>
    </div>
  );
};

const games = [
  {
    core: "mgba",
    rom: "./roms/Pokemonemerald.gba",
    imgurl: "./covers/Pokemon---Emerald-Version--USA--Europe-.png",
    text: "Pokemon Emerald",
  },
  {
    core: "mgba",
    rom: "./roms/Pokemonruby.gba",
    imgurl: "./covers/Pokemon---Ruby-Version--USA--Europe---Rev-2-.png",
    text: "Pokemon Ruby",
  },
  {
    core: "mgba",
    rom: "./roms/Pokemonfirered.gba",
    imgurl: "./covers/Pokemon---Fire-Red-Version--USA-.png",
    text: "Pokemon Fire Red",
  },
  {
    core: "mgba",
    rom: "./roms/Pokemonleafgreen.gba",
    imgurl: "./covers/Pokemon---Leaf-Green-Version--USA-.png",
    text: "Pokemon Leaf Green",
  },
  {
    core: "nestopia",
    rom: "./roms/Supermariobros.nes",
    imgurl: "./covers/Super-Mario-Bros.--JU-----.jpg",
    text: "Super Mario Bros.",
  },
  {
    core: "nestopia",
    rom: "./roms/Supermariobros2.nes",
    imgurl: "./covers/Super-Mario-Bros.-2--U---PRG1-----.jpg",
    text: "Super Mario Bros. 2",
  },
  {
    core: "nestopia",
    rom: "./roms/Supermariobros3.nes",
    imgurl: "./covers/Super-Mario-Bros.-3--U---PRG1-----.jpg",
    text: "Super Mario Bros. 3",
  },
  {
    core: "nestopia",
    rom: "./roms/Metroid.nes",
    imgurl: "./covers/Metroid--U---PRG0-----.jpg",
    text: "Metroid",
  },
  {
    core: "nestopia",
    rom: "./roms/Legendofzelda.nes",
    imgurl: "./covers/Legend-of-Zelda--The--U---PRG1-----.jpg",
    text: "Legend of Zelda",
  },
  {
    core: "nestopia",
    rom: "./roms/Punchout.nes",
    imgurl: "./covers/Mike-Tyson-s-Punch-Out----U---PRG1-----.jpg",
    text: "Punch Out",
  },
  {
    core: "nestopia",
    rom: "./roms/Tetris.nes",
    imgurl: "./covers/Tetris_NES_cover_art.jpg",
    text: "Tetris",
  },
  {
    core: "snes9x",
    rom: "./roms/Ultimatemortalkombat3.sfc",
    imgurl: "./covers/Ultimate-Mortal-Kombat-3--USA-.JPG",
    text: "Ult. Mortal Kombat 3",
  },
  {
    core: "snes9x",
    rom: "./roms/Supermetroid.sfc",
    imgurl: "./covers/Super-Metroid--Japan--USA-.jpg",
    text: "Super Metroid",
  },
  {
    core: "snes9x",
    rom: "./roms/Supermarioworld.smc",
    imgurl: "./covers/Super-Mario-World--USA-.jpg",
    text: "Super Mario World",
  },
];

export default GameList;
