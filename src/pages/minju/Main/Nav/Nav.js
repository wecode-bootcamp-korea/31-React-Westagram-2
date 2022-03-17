import React from 'react';
import '../Nav/Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="navbar">
        <div className="navbar__logo">
          <i className="fa-brands fa-instagram" />
          <div className="navbar__logo__text">Westagram</div>
        </div>
        <div className="navbar__search">
          <input className="navbar__searchBar" placeholder="검색" />
          <i className="fa-solid fa-magnifying-glass searchIcon" />
        </div>
        <div className="navbar__moreFunctions">
          <i className="fa-regular fa-compass" />
          <i className="fa-regular fa-heart" />
          <i className="fas fa-regular fa-user-large" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
