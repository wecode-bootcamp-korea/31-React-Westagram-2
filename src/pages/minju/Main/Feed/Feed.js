import React, { useRef, useState } from 'react';
import './Feed.scss';
import Comment from './Comment';

function Feed() {
  const [comment, setComment] = useState('');
  const [commentsArr, setCommentsArr] = useState([]);
  const commentInput = useRef();

  const handleChange = event => {
    setComment(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (comment.length < 1) {
      commentInput.current.focus();
      return;
    }
    setCommentsArr(prevComments => [...prevComments, comment]);
    setComment('');
  };

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
          <div>
            <span className="avatar__id">aineworld</span>님 <b>외 10명</b>이
            좋아합니다.
          </div>
        </div>
      </div>

      <div className="feed__post">
        <span className="avatar__id">thisisme</span>
        <span>위워크에서 진행한 베이킹 클래스...</span>
        <button>더 보기</button>
      </div>

      <div className="feed__comments">
        {commentsArr.map((item, index) => {
          return <Comment key={index} comment={item} />;
        })}
      </div>

      <div className="feed__postTime">42분 전</div>

      <form className="feed__addComment" onSubmit={handleSubmit}>
        <input
          ref={commentInput}
          value={comment}
          onChange={handleChange}
          type="text"
          placeholder="댓글 달기..."
        />
        <button className={comment.length > 0 ? 'activated' : ''} type="submit">
          게시
        </button>
      </form>
    </article>
  );
}

export default Feed;
