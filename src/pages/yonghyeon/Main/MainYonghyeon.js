import React, { useEffect, useState } from 'react';
import Feed from './components/Feed';
import Nav from '../../../components/Nav/Nav';
import './MainYonghyeon.scss';

const Main = () => {
  const [feed, setFeed] = useState([]);
  const [comment, setComment] = useState([]);
  let [input, setInput] = useState('');

  const getData = async () => {
    const data = await fetch('./data/feedData.json').then(res => res.json());
    setFeed(data);
  };

  useEffect(() => {
    getData();
    console.log(feed);
  }, []);

  return (
    <main>
      <Nav />
      <section className="section">
        <div className="sectionFeed">
          {feed.map(item => {
            return <Feed key={item.id} {...item} />;
          })}
        </div>

        <aside className="asideContainer">
          <div className="sectionRight__myData">
            <div className="myImg" />
            <div className="myContent">
              <span>sunnyfterrain_</span>
              <span>용현</span>
            </div>
          </div>
          <div className="sectionRight__story">
            <div className="storyTitle">
              <div>스토리</div>
              <div>모두 보기</div>
            </div>
            <ul>
              <li className="story">
                <div className="storyImg" />
                <div className="storyContent">
                  <span>loubxxtin</span>
                  <span>42분전</span>
                </div>
              </li>
              <li className="story">
                <div className="storyImg" />
                <div className="storyContent">
                  <span>wecode_bootcamp</span>
                  <span>16분전</span>
                </div>
              </li>
              <li className="story">
                <div className="storyImg" />
                <div className="storyContent">
                  <span>sunnyfterrain_</span>
                  <span>1시간전</span>
                </div>
              </li>
              <li className="story">
                <div className="storyImg" />
                <div className="storyContent">
                  <span>jung</span>
                  <span>27분전</span>
                </div>
              </li>
              <li className="story">
                <div className="storyImg" />
                <div className="storyContent">
                  <span>un__lune</span>
                  <span>12분전</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="sectionRight__recommend">
            <div className="recommendTitle">
              <div>회원님을 위한 추천</div>
              <div>모두 보기</div>
            </div>
            <ul>
              <li className="recommend">
                <div className="recommend_container">
                  <div className="recommendImg" />
                  <div className="recommendContent">
                    <span>lucky_days</span>
                    <span className="elip">wecode님 외 2명이...</span>
                  </div>
                </div>
                <button>팔로우</button>
              </li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <li>Westagram 정보</li>
              <li>지원</li>
              <li>홍보 센터</li>
              <li>API</li>
              <li>채용 정보</li>
              <li>개인정보처리방침</li>
              <li>약관</li>
              <li>디렉터리</li>
              <li>프로필</li>
              <li>해시태그</li>
              <li>언어</li>
            </ul>
          </div>
          <div className="snsName">© 2022 Westagram</div>
        </aside>
      </section>
    </main>
  );
};

export default Main;
