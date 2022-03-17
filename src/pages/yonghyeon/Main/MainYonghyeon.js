import React, { useState } from 'react';

import './MainYonghyeon.scss';

const Main = () => {
  const [comment, setComment] = useState([]);
  let [input, setInput] = useState('');

  const handleComment = e => {
    e.preventDefault();
    const blank = /^\s+|\s+$/g;
    const newComment = [...comment];
    if (input === '') {
      return;
    }
    if (input.replace(blank, '') === '') {
      return;
    }
    newComment.push(input);
    setComment(newComment);
    setInput('');
  };

  return (
    <main>
      <header className="header">
        <nav className="nav">
          <div className="navTitle">
            <div className="logo" />
            <div className="divide" />
            <h1>Westagram</h1>
          </div>
          <div className="navSearchBar">
            <div className="logo" />
            <input className="navSearchBarInput" placeholder="검색" />
          </div>
          <div>
            <ul className="navUl">
              <li className="explore" />
              <li className="liked" />
              <li className="profile" />
            </ul>
          </div>
        </nav>
      </header>
      <section className="section">
        <section className="sectionLeft">
          <div className="sectionLeft__header">
            <div className="user">
              <div className="user__img" />
              <span className="user__id">loubxxtin</span>
            </div>
            <div className="more">
              <i className="fa-solid fa-ellipsis" />
            </div>
          </div>
          <div className="sectionLeft__main" />
          <div className="sectionLeft__footer">
            <div className="sectionLeft__footer__icons">
              <div className="icons">
                <div className="heart" />
                <div className="comment">
                  <i className="fa-regular fa-comment" />
                </div>
                <div className="sharing">
                  <i className="fa-regular fa-paper-plane" />
                </div>
              </div>
              <div className="bookmark" />
            </div>
            <div className="sectionLeft__footer__like">
              <div className="like__img" />
              <span>sunny외 1명이 좋아합니다.</span>
            </div>
            <div className="sectionLeft__footer__comment">
              <ul>
                {comment.map((item, i) => {
                  return (
                    <li>
                      <span className="commentId">sunntfterrain_ &nbsp;</span>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="sectionLeft__footer_commentInput">
              <form className="commentForm">
                <input
                  className="commentInput"
                  type="text"
                  placeholder="댓글 달기..."
                  value={input}
                  onChange={e => {
                    setInput(e.target.value);
                  }}
                />
                <button onClick={handleComment}>게시</button>
              </form>
            </div>
          </div>
        </section>

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
