import React from 'react';
import './MainMinju.scss';
import Nav from './Nav/Nav';
import Feed from './Feed/Feed.js';
import MainRight from './MainRight/MainRight';

function Main() {
  return (
    <>
      <Nav />
      <main className="main">
        <div className="main__left">
          <Feed />
          <Feed />
        </div>
        <MainRight />
      </main>
    </>
  );
}

export default Main;
