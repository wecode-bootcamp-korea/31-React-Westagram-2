import React from 'react';
import '../Nav/Nav.scss';

function Nav() {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar__logo">
          <i className="fa-brands fa-instagram" />
          <div className="navbar__logo__text">Westagram</div>
        </div>
        <div className="navbar__search">
          <input className="navbar__searchBar" placeholder="검색" />
          <i className="fa-solid fa-magnifying-glass searchIcon" />
          <i className="fa-solid fa-circle-xmark" />
        </div>
        <div className="navbar__moreFunctions">
          <i className="fa-regular fa-compass" />
          <i className="fa-regular fa-heart" />
          <i className="fas fa-regular fa-user-large" />
        </div>

        <div className="searchToggle">
          <div className="toggle__arrow" />
          <div className="searched__items" />
        </div>

        <div className="overlay" />
        <div className="profileOptions">
          <div className="toggle__arrow" />
          <div className="profileOptions__item">
            <i className="fa-solid fa-user" />
            <div className="profileOption__description">프로필</div>
          </div>
          <div className="profileOptions__item">
            <i className="fa-regular fa-bookmark" />
            <div className="profileOption__description">저장됨</div>
          </div>
          <div className="profileOptions__item">
            <i className="fa-solid fa-gear" />
            <div className="profileOption__description">설정</div>
          </div>
          <div className="profileOptions__item">로그아웃</div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
