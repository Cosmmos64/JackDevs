import "./App.css";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function App() {
  return (
    <div className="main">
      <div className="background" />
      <Navbar />
    </div>
  );
}
function Navbar() {
  return (
    <ul className="navbar">
      <div className="dropdown">
      <FontAwesomeIcon icon={faBars} size="2x" inverse />
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <img src="/logo.svg" alt="Home" />
      <div>
        <FontAwesomeIcon icon={faGithub} size="2x" inverse />
      </div>
    </ul>
  );
}
