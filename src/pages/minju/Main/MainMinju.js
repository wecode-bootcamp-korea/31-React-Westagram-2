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
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const openPostToggle = () => {
    setPostToggleOpen(!postToggleOpen);
  };

  // const uploadImage = e => {
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append('file', files[0]);
  //   setLoading(true);
  //   fetch('http://', {
  //     method: 'POST',
  //     body: data,
  //   })
  //     .then(res => res.json())
  //     .then(res => setImage(res))
  //     .then(setLoading(false));
  //   console.log(data);
  // };

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
          {data.map(item => {
            return <Feed key={item.postId} {...item} />;
          })}
        </div>
        <MainRight />
      </main>
    </>
  );
}

export default Main;
