import React from 'react';
import './Feed.scss';

function Feed() {
  return (
    <article className="feed">
      <header className="feed__header">
        <div className="feed__header__left">
          <div className="img__container">
            <img
              className="avatar__img"
              alt="my profile"
              src="/images/minju/myprofile.jpeg"
            />
          </div>
          <div className="avatar__id">thisisme</div>
        </div>
        <div className="feed__header__right">
          <i className="fa fa-light fa-ellipsis" />
        </div>
      </header>

      <div className="feed__image__container">
        <img alt="feed content" src="/images/minju/baking.jpeg" />
      </div>

      <div className="feed__reaction">
        <div className="feed__reaction__icons">
          <div className="feed__reaction__icons__left">
            <i className="fa-regular fa-heart" />
            <i className="fa-regular fa-comment" />
            <i className="fas fa-arrow-up-from-bracket" />
          </div>
          <div className="feed__reaction__icons__right">
            <i className="fa-regular fa-bookmark" />
          </div>
        </div>
        <div className="feed__reaction__likes">
          <div className="img__container">
            <img
              className="avatar__img"
              alt="user"
              src="/images/minju/profile2.jpeg"
            />
          </div>
          <span>
            <span className="avatar__id">aineworld</span>님 <b>외 10명</b>이
            좋아합니다.
          </span>
        </div>
      </div>

      <div className="feed__post">
        <span className="avatar__id">thisisme</span>
        <span>위워크에서 진행한 베이킹 클래스...</span>
        <button>더 보기</button>
      </div>

      <div className="feed__comments">
        <div className="feed__comment__item" data-num="1">
          <span className="avatar__id">canon_mj</span>
          <span>거봐~너무 좋았잖아~</span>
          <span className="feed__comment__reactions">
            <i className="fa-solid fa-x" data-num="1" />
            <i className="fa-regular fa-heart" data-like="1" />
          </span>
        </div>
      </div>

      <div className="feed__postTime">42분 전</div>

      <form className="feed__addComment">
        <input type="text" placeholder="댓글 달기..." />
        <button type="submit">게시</button>
      </form>
    </article>
  );
}

export default Feed;
