import React, { useRef, useState } from 'react';
import './Feed.scss';
import Comment from './Comment/Comment';

const Feed = ({
  profileName,
  profileUrl,
  contentUrl,
  feedContent,
  commentList,
}) => {
  const [comment, setComment] = useState({
    id: '',
    userName: 'minjuKim',
    content: '',
    isLiked: true,
  });

  const [commentsArr, setCommentsArr] = useState(commentList);

  const commentInput = useRef();

  const handleChange = event => {
    const { value } = event.target;
    setComment(prevValue => ({ ...prevValue, content: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (comment.length < 1) {
      commentInput.current.focus();
      return;
    }
    let dataId = commentsArr.length + 1;
    const newComment = { ...comment, id: dataId++ };
    setCommentsArr(prevComments => [...prevComments, newComment]);
    setComment(prevValue => ({ ...prevValue, content: '' }));
  };

  return (
    <article className="feed">
      <header className="feed__header">
        <div className="feed__header__left">
          <div className="img__container">
            <img className="avatar__img" alt="my profile" src={profileUrl} />
          </div>
          <div className="avatar__id">{profileName}</div>
        </div>
        <div className="feed__header__right">
          <i className="fa fa-light fa-ellipsis" />
        </div>
      </header>

      <div className="feed__image__container">
        <img alt="feed content" src={contentUrl} />
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
            <span className="avatar__id">
              aineworld님 <strong>외 10명</strong>이 좋아합니다.
            </span>
          </div>
        </div>
      </div>

      <div className="feed__post">
        <span className="avatar__id">{profileName}</span>
        <span>{feedContent}</span>
        <button>더 보기</button>
      </div>

      <div className="feed__comments">
        {commentsArr.map(item => {
          return (
            <Comment
              key={item.id}
              content={item.content}
              userName={item.userName}
            />
          );
        })}
      </div>

      <div className="feed__postTime">42분 전</div>

      <form className="feed__addComment" onSubmit={handleSubmit}>
        <input
          ref={commentInput}
          value={comment.content}
          onChange={handleChange}
          type="text"
          placeholder="댓글 달기..."
        />
        <button
          className={comment.content.length > 0 ? 'activated' : ''}
          type="submit"
        >
          게시
        </button>
      </form>
    </article>
  );
};

export default Feed;
