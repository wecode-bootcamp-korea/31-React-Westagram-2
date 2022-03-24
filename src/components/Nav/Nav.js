import React, { useState, useEffect } from 'react';
import SearchedItem from './SearchedItem/SearchedItem';
import './Nav.scss';

function Nav() {
  const [originalUserData, setOriginalUserData] = useState([]);
  const [searchArr, setSearchArr] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/data/idData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setOriginalUserData(data);
      });
  }, []);

  const handleChange = event => {
    const { value } = event.target;
    setKeyword(value);
    let searchedArr = originalUserData.filter(item =>
      item.userId.includes(value)
    );
    setSearchArr(searchedArr);
  };

  let showToggle = keyword.length >= 1;

  return (
    <nav className="nav">
      <div className="navbar">
        <div className="navbar__logo">
          <i className="fa-brands fa-instagram" />
          <div className="navbar__logo__text">Westagram</div>
        </div>
        <div className="navbar__search">
          <input
            className="navbar__searchBar"
            placeholder="검색"
            onChange={handleChange}
            value={keyword}
          />
          <i className="fa-solid fa-magnifying-glass searchIcon" />
        </div>
        <div className="navbar__moreFunctions">
          <button>
            {' '}
            <i className="fa-solid fa-square-plus" />
          </button>
          <i className="fa-regular fa-compass" />
          <i className="fa-regular fa-heart" />
          <i className="fas fa-regular fa-user-large" />
        </div>

        <div
          className="searchToggle"
          style={showToggle ? { display: 'block' } : { display: 'none' }}
        >
          <div className="toggle__arrow" />
          <div className="searched__items">
            {searchArr.map(item => {
              return <SearchedItem key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
