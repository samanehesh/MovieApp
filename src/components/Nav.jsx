// Nav

import { NavLink } from "react-router-dom";

import "../styles/Nav.css";

const Nav = () => {
  function blur(e) {
    e.target.blur();
  }

  return (
    <nav className="main-nav" onClick={blur}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
        <li>
          <NavLink to="/watchlater">Watch Later</NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Nav;
