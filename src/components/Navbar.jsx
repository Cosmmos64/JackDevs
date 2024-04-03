import React from 'react';
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="navbar">
      <div className="dropdown">
        <FontAwesomeIcon icon={faBars} size="2x" inverse />
        <div className="dropdown-content">
          <Link className="a" to="/">
            Home
          </Link>
          <Link className="b" to="/games">
            Games
          </Link>
          <Link className="c" to="#">
            My projects
          </Link>
        </div>
      </div>
      <img src="/logo.svg" alt="Home" />
      <div>
        <FontAwesomeIcon icon={faGithub} size="2x" inverse />
      </div>
    </ul>
  );
}
