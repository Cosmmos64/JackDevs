import React from 'react';
import "./App.css";
import Navbar from "../components/Navbar.jsx";
import GameList from "../components/Gamelist.jsx";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="mainwrapper">
        <Routes>
          <Route path="/games" element={ <GameList /> } />
        </Routes>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="*" element={<notFound />}/>
        </Routes>
      </div>
    </div>
  );
}

function Main() {
  return (
    <>
      <h1 className="title">
        Games, CSS, Javascript and more!
      </h1>
      <div className="wrapper2">
        <h2>
          Trending games:
        </h2>
      </div>
    </>
  );
}
function notFound() {
  return (
    <>
      <h1 className="title">
        404 - Page not found
      </h1>
    </>
  )
}