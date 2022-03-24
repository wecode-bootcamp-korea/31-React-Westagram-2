import React from 'react';
import '../../../styles/common.scss';
import './MainHyeseong.scss';

const MainNavBar = () => {
  return (
    <nav className="navBar">
      <div className="navbarContainer">
        <div className="title">
          <img alt="logo" id="logo-image" src="images/hyeseong/instagram.png" />
          <span className="devider" />
          <span className="logo" id="logo-main">
            Westagram
          </span>
        </div>
        <div className="searchBar">
          <div className="searchBarInnerText">
            <i
              id="magnifying-glass"
              className="fa-solid fa-magnifying-glass fa-sm"
            />
            <span>검색</span>
          </div>
          <input type="text" id="search-input" />
        </div>
        <ul className="icons">
          <li>
            <img
              alt="explore"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
          </li>
          <li>
            <img
              alt="heart"
              src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
          </li>
          <li>
            <img
              alt="my-info"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default MainNavBar;
