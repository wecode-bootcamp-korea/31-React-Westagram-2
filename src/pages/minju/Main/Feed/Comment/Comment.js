import React from 'react';
import './Comment.scss';

const Comment = ({ content, userName }) => {
  return (
    <div className="comment">
      <span className="avatar__id">{userName}</span>
      <span>{content}</span>
      <span className="feed__comment__reactions">
        <i className="fa-regular fa-heart" />
      </span>
    </div>
  );
};

export default Comment;
