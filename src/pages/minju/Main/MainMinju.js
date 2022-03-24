import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import MainRight from './MainRight/MainRight';
import Feed from './Feed/Feed.js';
import './MainMinju.scss';

function Main() {
  const [feedArr, setFeedArr] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedArr(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <main className="main">
        <div className="main__left">
          {feedArr.map(item => {
            return <Feed key={item.userId} {...item} />;
          })}
        </div>
        <MainRight />
      </main>
    </>
  );
}

export default Main;
