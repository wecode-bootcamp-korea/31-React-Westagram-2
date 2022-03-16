/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../../../styles/common.scss';
import './MainJihyeon.scss';
import { useNavigate } from 'react-router-dom';

function MainJihyeon() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-jihyeon');
  };

  const goToLogin = () => {
    navigate('/Login-jihyeon');
  };

  const goToSignup = () => {
    navigate('/Signup-jihyeon');
  };

  return (
    <main className="main">
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
          <div className="minibox1">
            <img
              className="miniboxPhoto1"
              src="images/jihyeon/profilePhoto/profPhoto7.jpg"
              alt="profile photo"
            />
            <span className="miniboxNick1">WecodeFront</span>
            <span className="miniboxComment1">
              안녕하세요 저는 프론트앤드 개발자입니다.
            </span>
            <button className="deleteBtn1">
              <img src="images/jihyeon/cross.png" alt="delete button" />
            </button>
            <button className="showFullReplyModalBtn">더보기</button>
          </div>
          <div className="minibox2">
            <img
              className="miniboxPhoto2"
              src="images/jihyeon/profilePhoto/profPhoto6.jpg"
              alt="profile photo"
            />
            <span className="miniboxNick2">WecodeBack</span>
            <button className="deleteBtn2">
              <img src="images/jihyeon/cross.png" alt="delete button" />
            </button>
            <span className="miniboxComment2">
              안녕하세요. 저는 백앤드 개발자입니다.
            </span>
          </div>
        </section>

        <section className="articleInsertReplyArea">
          <input
            type="text"
            className="articleInsertReplyContent"
            placeholder="댓글 달기.."
          />
          <button className="articleInsertReplyBtn">
            <span>게시</span>
          </button>
        </section>
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
    </main>
  );
}

export default MainJihyeon;
