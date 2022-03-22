import React, { useState } from 'react';
import Comment from './Comment';

const Feed = ({ content, userName, photo, comments }) => {
  const [newComment, setNewComment] = useState(comments);
  const [input, setInput] = useState('');

  const handleComment = e => {
    e.preventDefault();

    // 공백처리 정규화
    const blank = /^\s+|\s+$/g;
    if (input.replace(blank, '') === '') {
      return;
    }

    // 댓글 기능
    const copyComment = [...newComment];
    copyComment.push({
      id: (newComment.length += 1),
      userName: 'yonghyeon',
      content: input,
      isLiked: false,
    });
    setNewComment(copyComment);
    setInput('');
  };

  return (
    <section className="sectionLeft">
      <div className="sectionLeft__header">
        <div className="user">
          <div className="user__img" />
          <span className="user__id">{userName}</span>
        </div>
        <div className="more">
          <i className="fa-solid fa-ellipsis" />
        </div>
      </div>
      <div className="sectionLeft__main">
        <img src={photo} width="600px" height="600px" alt="사진" />
      </div>
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
        <div className="feedMain">{content}</div>
        <div className="sectionLeft__footer__comment">
          <ul className="footer__comment">
            {newComment.map(item => {
              return <Comment key={item.id} {...item} />;
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
  );
};

export default React.memo(Feed);
