import React, { useState, useEffect } from 'react';
import SearchedItem from './SearchedItem/SearchedItem';
import NoResult from './SearchedItem/NoResult';
import './Nav.scss';

function Nav() {
  const [searchArr, setSearchArr] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [newPostBtn, setNewPostBtn] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/data/idData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSearchArr(data);
      });
  }, []);

  const handleChange = event => {
    const { value } = event.target;
    setKeyword(value);
  };

  let showSearchResult = keyword.length >= 1;
  let searchedArr = searchArr.filter(item => item.userId.includes(keyword));
  const hasValue = searchedArr.length > 0;

  const handleClick = () => {
    setNewPostBtn(!newPostBtn);
  };

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
            <i className="fa-solid fa-square-plus" onClick={handleClick} />
          </button>
          <i className="fa-regular fa-compass" />
          <i className="fa-regular fa-heart" />
          <i className="fas fa-regular fa-user-large" />
        </div>
        <div
          className="searchToggle"
          style={showSearchResult ? { display: 'block' } : { display: 'none' }}
        >
          <div className="toggle__arrow" />
          <div className="searched__items">
            {hasValue ? (
              searchedArr.map(item => {
                return <SearchedItem key={item.id} {...item} />;
              })
            ) : (
              <NoResult />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
