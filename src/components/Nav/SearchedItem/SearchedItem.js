import React from 'react';
import './SearchedItem.scss';

const SearchedItem = ({ userId, description, src }) => {
  return (
    <div className="searchedItem">
      <div class="img__container">
        <img class="avatar__img" src={src} alt="searched item img" />
      </div>
      <div class="id__container">
        <div class="avatar__id">{userId}</div>
        <div class="avatar__description">{description}</div>
      </div>
    </div>
  );
};

export default SearchedItem;
