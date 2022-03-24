import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed';
import './MainHyeseong.scss';
import storyData from './storyData';
const MainHyeseong = () => {
  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

  let [feeds, setFeeds] = useState([]);

  return (
    <div className="MainHyeseong">
      <Nav />
      <section className="mainContents">
        <section className="feeds">
          <article className="postContainer">
            {feeds.map(feed => {
              return <Feed key={feed.id} feed={feed} />;
            })}
          </article>
          <aside className="mainRight">
            <div className="user-cell" id="rigth-user-cell">
              <img
                alt="user-profile-img"
                src="images/hyeseong/otter.png"
                className="porfile-img"
              />
              <ul className="user-cell-text">
                <li className="user-id">moooo_nhs</li>
                <li className="user-cell-desc">wecode</li>
              </ul>
            </div>
            <section className="stories">
              <div className="main-right-title">
                <span>스토리</span>
                <span>모두 보기</span>
              </div>
              <div className="user-cell-container user-cell-container-stories">
                {storyData.map(story => {
                  return (
                    <div className="user-cell" key={story.id}>
                      <img
                        alt="user-profile-img"
                        src={story.profileImage}
                        className="porfile-img"
                      />
                      <ul className="user-cell-text">
                        <li className="user-id">{story.userId}</li>
                        <li className="user-cell-desc">{story.userDesc}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="recommend-friends">
              <div className="main-right-title">
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
              </div>
              <div className=" user-cell-container user-cell-container-recommend">
                {storyData.map(story => {
                  return (
                    <div className="user-cell" key={story.id}>
                      <img
                        alt="user-profile-img"
                        src={story.profileImage}
                        className="porfile-img"
                      />
                      <ul className="user-cell-text">
                        <li className="user-id">{story.userId}</li>
                        <li className="user-cell-desc">{story.userDesc}</li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>
            <footer className="copy">
              소개 • 도움말 • 홍보 센터 • API • 채용 정보 •<br />
              개인정보처리방침 • 약관 • 위치 • 인기 계정 • 해시태그 • 언어
              <p>© 2022 WESTAGRAM FROM WECODE</p>
            </footer>
          </aside>
        </section>
      </section>
    </div>
  );
};

export default MainHyeseong;
