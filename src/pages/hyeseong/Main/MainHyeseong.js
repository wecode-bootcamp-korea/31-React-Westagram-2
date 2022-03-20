import React from 'react';
import './MainHyeseong.scss';
//import MainNavBar from './MainNavBar';
import UserComment from './UserComment';
import { useState } from 'react';
import Nav from '../../../components/Nav/Nav';
const MainHyeseong = () => {
  let [comments, setComments] = useState([]);
  let [commentInputValue, setCommentInputValue] = useState('');
  let [isActice, setIsActice] = useState('deactive');
  let [isdisabled, setIsDisabled] = useState(true);
  let submitBtnClassName = `${isActice}-btn`;

  const handleCommnetInput = e => {
    let comment = e.target.value; //copy
    commentInputValue = comment;
    setCommentInputValue(commentInputValue);
  };

  const addComment = e => {
    let commentArr = [...comments]; //copy
    commentArr.push(commentInputValue);
    setComments(commentArr);
    setCommentInputValue('');

    e.preventDefault();
  };

  // const addComment = (e) => {
  //   comments.push(commentInputValue);
  //   setComments(comments);
  //   setCommentInputValue('');

  //   e.preventDefault();
  // };

  const activateBtn = () => {
    setIsActice('active');
    setIsDisabled(false);
  };

  const deActivateBtn = () => {
    setIsActice('deactive');
    setIsDisabled(true);
  };

  const checkInput = () => {
    let emptyCheck = commentInputValue.replace(/(\s*)/g, '');
    emptyCheck === '' ? deActivateBtn() : activateBtn();
  };
  return (
    <div className="mainContainer">
      <Nav />
      <article className="main-contents">
        <article className="feeds">
          <div className="post">
            <div className="user-cell">
              <img
                alt="profile-img"
                src="/images/hyeseong/otter.png"
                className="porfile-img"
              />
              <div className="user-cell-text">
                <span className="user-id">moooo_nhs</span>
                <span className="user-cell-desc">wecode</span>
              </div>
              <i className="fa-solid fa-ellipsis" />
            </div>
            <div className="article-iamge">
              <img
                alt="thumbnail"
                className="iamge-thumbnail"
                src="images/hyeseong/otterImage.jpg"
              />
            </div>
            <div className="article-icons">
              <div className="icons-left">
                <i id="articleHeart" className="fa-regular fa-heart fa-xl" />
                <i className="fa-regular fa-comment fa-xl" />
                <i className="fa-solid fa-arrow-up-from-bracket fa-xl" />
              </div>
              <i className="fa-regular fa-bookmark fa-xl" />
            </div>

            <div id="articleConnents" className="article-comments">
              <div className="likes-count">
                <img
                  alt="likes-count-profile"
                  src="images/hyeseong/핑구.jpeg"
                />
                <span>aineworld</span>
                님&nbsp;
                <span>외 10명</span>이 좋아합니다
              </div>
              <div className="poster-commnets">
                <div className="comments">
                  <span className="user-name">moooo_nhs</span>
                  <span className="commnets-desc">I`m in WeWork</span>
                </div>
              </div>
              <div className="user-comments">
                {comments.map((comment, index) => {
                  return <UserComment comment={comment} key={index} />;
                })}
              </div>
            </div>
            <span className="time-stamp">1시간 전</span>
            <div className="input-comments">
              <button className="input-emoji">
                <i className="fa-regular fa-face-smile fa-xl" />
              </button>
              <form
                className="commnet-form"
                onSubmit={e => {
                  addComment(e);
                }}
              >
                <input
                  className="comment-input"
                  id="commnetInput"
                  type="text"
                  placeholder="댓글 달기..."
                  autoComplete="off"
                  required
                  onChange={e => {
                    handleCommnetInput(e);
                    checkInput();
                  }}
                  value={commentInputValue}
                />
                <button
                  id="commnetButton"
                  className={`comment-submit ${submitBtnClassName}`}
                  type="submit"
                  disabled={isdisabled}
                >
                  게시
                </button>
              </form>
            </div>
          </div>
        </article>
        <article className="main-right">
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
              <div className="user-cell">
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
              <div className="user-cell">
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
              <div className="user-cell">
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
              <div className="user-cell">
                <img
                  alt="user-profile-img"
                  src="images/hyeseong/핑구.jpeg"
                  className="porfile-img"
                />
                <ul className="user-cell-text">
                  <li className="user-id">moooo_nhs</li>
                  <li className="user-cell-desc">wecode</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="recommend-friends">
            <div className="main-right-title">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <div className=" user-cell-container user-cell-container-recommend">
              <div className="user-cell">
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
              <div className="user-cell">
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
              <div className="user-cell">
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
              <div className="user-cell">
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
            </div>
          </section>
          <footer className="copy">
            소개 • 도움말 • 홍보 센터 • API • 채용 정보 •<br />
            개인정보처리방침 • 약관 • 위치 • 인기 계정 • 해시태그 • 언어
            <p>© 2022 WESTAGRAM FROM WECODE</p>
          </footer>
        </article>
      </article>
    </div>
  );
};

export default MainHyeseong;
