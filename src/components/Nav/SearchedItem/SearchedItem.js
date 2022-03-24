import React from 'react';
import './SearchedItem.scss';

const SearchedItem = ({ userId, description, src }) => {
  return (
    <div className="searchedItem">
      <div className="img__container">
        <img className="avatar__img" src={src} alt="searched item img" />
      </div>
      <div className="id__container">
        <div className="avatar__id">{userId}</div>
        <div className="avatar__description">{description}</div>
      </div>
    </div>
  );
};

export default SearchedItem;
