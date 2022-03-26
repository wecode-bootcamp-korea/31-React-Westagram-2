import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import MainRight from './MainRight/MainRight';
import Feed from './Feed/Feed.js';
import './MainMinju.scss';
import NewPost from '../../../components/Nav/NewPost/NewPost';

function Main() {
  const [data, setData] = useState([]);
  const [postToggleOpen, setPostToggleOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
      // TODO: 백엔드와 통신 시 사용하는 코드
      // headers: {
      //   Authorization:
      //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjB9.fm3iykc49El7OIhJwW6AXRwdnscazvhQYlRSdoq3RV4',
      // },
    })
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const openPostToggle = () => {
    setPostToggleOpen(!postToggleOpen);
  };

  return (
    <>
      <Nav openPostToggle={openPostToggle} />
      {postToggleOpen ? (
        <NewPost openPostToggle={openPostToggle} setData={setData} />
      ) : (
        ''
      )}
      <main className="main">
        <div className="main__left">
          {data.map(feed => {
            return <Feed key={feed.postId} feed={feed} />;
          })}
        </div>
        <MainRight />
      </main>
    </>
  );
}

export default Main;
