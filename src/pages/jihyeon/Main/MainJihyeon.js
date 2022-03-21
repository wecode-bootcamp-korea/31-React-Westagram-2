/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import '../../../styles/common.scss';
import './MainJihyeon.scss';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import Footer from '../Footer/FooterJihyeon';
import ReplyJihyeon from './ReplyJihyeon/ReplyJihyeon';
import REPLY_LIST_JIHYEON from './replyListJihyeon';

const MainJihyeon = () => {
  // 네비

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/Login-jihyeon');
  };

  const goToFullReply = () => {
    navigate('./ReplyFull.component/ReplyFull.component');
  };

  const goToSignup = () => {
    navigate('/Signup-jihyeon');
  };

  //댓글
  const [replyNow, setReplyNow] = useState('');
  const [replyFull, setReplyFull] = useState([]);

  const replyNowHandler = event => {
    setReplyNow(event.target.value);
  };

  const replyFullHandler = event => {
    event.preventDefault();
    setReplyFull(prevArr => [...prevArr, replyNow]);
    setReplyNow('');
  };

  return (
    <main className="main">
      <Nav />
      <article className="mainLeft">
        <section className="articleProfile">
          <img
            className="articleProfilePhoto"
            src="images/jihyeon/profilePhoto/profPhoto0.jpg"
            alt="image load error"
          />
          <span className="articleProfileName"> 31기 전지현</span>
          <button className="articleProfileOptBtn">
            <img
              src="images/jihyeon/articleMenuBtn.png"
              alt="article option button"
            />
          </button>
        </section>
        <section className="articlePhotoArea">
          <img
            src="images/jihyeon/articlePhoto.avif"
            className="articlePhoto"
            alt="image load error"
          />
        </section>

        <section className="articleTextContent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus repudiandae totam voluptate beatae sit architecto
            corrupti quibusdam tempora odio labore nobis iste blanditiis iusto
            non, facere minima illum consequuntur necessitatibus? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Voluptatibus
            repudiandae totam voluptate beatae sit architecto corrupti quibusdam
            tempora odio labore nobis iste blanditiis iusto non, facere minima
            illum consequuntur necessitatibus?
          </p>
        </section>

        <section className="articleBtnArea">
          <button className="articleLikeBtn">
            <img src="images/jihyeon/blackEmptyHeart.png" alt="emepty heart" />
          </button>
          <button className="articleReplyBtn">
            <img src="images/jihyeon/textBtn.png" alt="go reply button" />
          </button>
          <button className="articleSaveBtn">
            <img
              src="images/jihyeon/downloadBtn.png"
              alt="save article button"
            />
          </button>
          <button className="articleBookmarkBtn">
            <img src="images/jihyeon/bookmarkEmpty.png" alt="bookmark button" />
          </button>
        </section>

        <section className="articleLikeArea">
          <img
            className="whoFirstLikePhoto"
            src="images/jihyeon/fullRedHeart.png"
            alt="first like person's photo"
          />
          <span className="infoLikeWho">
            첫번째 좋아요 닉네임외의 n명이 좋아합니다. lorem
          </span>
        </section>

        <section className="articleReplyArea">
          {/* <ReplyJihyeon replyData={REPLY_LIST_JIHYEON} /> */}
          <ul>
            {REPLY_LIST_JIHYEON.map(input => {
              return (
                <ReplyJihyeon
                  key={input.id}
                  name={input.userName}
                  content={input.content}
                />
              );
            })}
          </ul>
        </section>

        <form className="articleInsertReplyArea" onSubmit={replyFullHandler}>
          <input
            type="text"
            className="articleInsertReplyContent"
            placeholder="댓글 달기.."
            onChange={replyNowHandler}
            value={replyNow}
          />
          <button
            type="submit"
            className="articleInsertReplyBtn"
            onClick={replyFullHandler}
          >
            <span>게시</span>
          </button>
        </form>
      </article>
      <div className="mainRight">
        <section className="sidebarNotLogined">
          <button className="sidebarLoginBtn" onClick={goToLogin}>
            <span>로그인</span>
          </button>
          <button className="sidebarJoinBtn" onClick={goToSignup}>
            <span>회원가입</span>
          </button>
        </section>

        <section className="sidebarLogined">
          <section className="sidebarLoginedTop">
            <img src="" alt="error" />
            <span />
          </section>
          <button className="sidebarLogOutBtn">
            <span>로그아웃</span>
          </button>
        </section>

        <section className="sidebarStory">
          <section className="sidebarStoryTop">
            <span>스토리</span>
            <button className="sidebarAllStoryBtn">모두보기</button>
          </section>
          <section className="sidebarStoryMain">
            <div className="story">
              <img
                src="images/jihyeon/profilePhoto/profPhoto10.png"
                className="storyPhoto"
                alt="profile photo"
              />
              <button className="storyMember1">dummy1</button>
            </div>
            <div className="story">
              <img
                src="images/jihyeon/profilePhoto/profPhoto11.png"
                className="storyPhoto"
                alt="profile photo"
              />
              <button className="storyMember2">dummy2</button>
            </div>
            <div className="story">
              <img
                src="images/jihyeon/profilePhoto/profPhoto12.png"
                className="storyPhoto"
                alt="profile photo"
              />
              <button className="storyMember3">dummy3</button>
            </div>
            <div className="story">
              <img
                src="images/jihyeon/profilePhoto/profPhoto13.png"
                className="storyPhoto"
                alt="profile photo"
              />
              <button className="storyMember4">dummy4</button>
            </div>
          </section>
        </section>

        <section className="sidebarRecommend">
          <section className="sidebarRecommendTop">
            <span>추천 팔로우</span>
            <button className="sidebarAllRecommendBtn">모두보기</button>
          </section>
          <section className="sidebarRecommendMain">
            <div className="recommendWho">
              <img
                className="recommendPhoto1"
                src="images/jihyeon/profilePhoto/profPhoto14.png"
                alt="profile photo"
              />
              <button className="recommendMember1">dummy5</button>
            </div>
            <div className="recommendWho">
              <img
                className="recommendPhoto2"
                src="images/jihyeon/profilePhoto/profPhoto15.png"
                alt="profile photo"
              />
              <button className="recommendMember2">dummy6</button>
            </div>
            <div className="recommendWho">
              <img
                className="recommendPhoto3"
                src="images/jihyeon/profilePhoto/profPhoto16.png"
                alt="profile photo"
              />
              <button className="recommendMember3">dummy7</button>
            </div>
            <div className="recommendWho">
              <img
                className="recommendPhoto4"
                src="images/jihyeon/profilePhoto/profPhoto17.png"
                alt="profile photo"
              />
              <button className="recommendMember4">dummy8</button>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default MainJihyeon;
