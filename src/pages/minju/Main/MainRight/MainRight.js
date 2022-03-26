import React from 'react';
import { Link } from 'react-router-dom';
import './MainRight.scss';

function MainRight() {
  return (
    <div className="mainRight">
      <div className="myId">
        <div className="img__container">
          <img
            className="avatar__img"
            alt="my profile"
            src="/images/minju/myprofile.jpeg"
          />
        </div>
        <div className="id__container">
          <div className="avatar__id">wecode_bootcamp</div>
          <div className="avatar__description">Wecode | 위코드</div>
        </div>
      </div>

      <div className="story">
        <div className="story__header">
          <div className="header__text">스토리</div>
          <div className="header__seeAll">모두 보기</div>
        </div>
        <div className="story__items">
          {STORY_LIST.map(item => {
            return (
              <div key={item.id} className="story__items__item">
                <div className="img__container">
                  <img
                    className="avatar__img"
                    alt="random user"
                    src={item.imgSrc}
                  />
                </div>
                <div className="id__container">
                  <div className="avatar__id">{item.userName}</div>
                  <div className="avatar__description">
                    {item.logTime}시간 전
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="recommendations">
        <div className="recommendations__header">
          <div className="header__text">회원님을 위한 추천</div>
          <div className="header__seeAll">모두 보기</div>
        </div>
        <div className="recommendations__items">
          {FOLLOWER_LIST.map(item => {
            return (
              <div key={item.id} className="recommendations__items__item">
                <div className="img__container">
                  <img
                    className="avatar__img"
                    alt="random user"
                    src={item.imgSrc}
                  />
                </div>
                <div className="id__container">
                  <div className="avatar__id">{item.userName}</div>
                  <div className="avatar__description">
                    {item.followerName}님 외 {item.followerNum}명이 팔로우합니다
                  </div>
                </div>
                <button className="follow">팔로우</button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="moreInfos">
        <ul className="infolists">
          {INFO_LIST.map(item => {
            return (
              <li key={item.id}>
                <Link to="#">{item.content}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="copyright">© 2022 INSTAGRAM FROM META</div>
    </div>
  );
}

const STORY_LIST = [
  {
    id: 1,
    userName: 'fakeid',
    imgSrc: '/images/minju/profile3.jpeg',
    logTime: '16',
  },
  {
    id: 2,
    userName: 'idnotrue',
    imgSrc: '/images/minju/profile4.jpeg',
    logTime: '3',
  },
  {
    id: 3,
    userName: 'idmock',
    imgSrc: '/images/minju/profile5.jpeg',
    logTime: '12',
  },
  {
    id: 4,
    userName: 'ididid',
    imgSrc: '/images/minju/profile6.jpeg',
    logTime: '10',
  },
];

const FOLLOWER_LIST = [
  {
    id: 1,
    userName: 'fakeid',
    imgSrc: '/images/minju/profile7.jpeg',
    followerName: 'happyminju',
    followerNum: '13',
  },
  {
    id: 2,
    userName: 'idnotrue',
    imgSrc: '/images/minju/profile8.jpeg',
    followerName: 'funnyminju',
    followerNum: '100',
  },
  {
    id: 3,
    userName: 'idmock',
    imgSrc: '/images/minju/profile2.jpeg',
    followerName: 'happyCoding',
    followerNum: '24',
  },
  {
    id: 4,
    userName: 'ididid',
    imgSrc: '/images/minju/profile2.jpeg',
    followerName: 'icandoit',
    followerNum: '56',
  },
];

const INFO_LIST = [
  { id: 1, content: 'Instagram 정보' },
  { id: 2, content: '지원' },
  { id: 3, content: '홍보 센터' },
  { id: 4, content: '지원' },
  { id: 5, content: 'API' },
  { id: 6, content: '채용 정보' },
  { id: 7, content: '개인정보처리방침' },
  { id: 8, content: '약관' },
  { id: 9, content: '위치' },
  { id: 10, content: '디렉토리' },
  { id: 11, content: '프로필' },
  { id: 12, content: '해시태그' },
  { id: 13, content: '언어' },
];

export default MainRight;
