import React, { useEffect, useState } from 'react';
import './MainMinju.scss';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed/Feed.js';
import MainRight from './MainRight/MainRight';

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
