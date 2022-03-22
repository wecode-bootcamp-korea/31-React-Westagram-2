/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainRight.scss';

const MainRight = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/Login-jihyeon');
  };

  const goToSignup = () => {
    navigate('/Signup-jihyeon');
  };

  return (
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
  );
};

export default MainRight;
