import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <span className="avatar__id">canon_mj</span>
      <span>{comment}</span>
      <span className="feed__comment__reactions">
        <i className="fa-solid fa-x" />
        <i className="fa-regular fa-heart" />
      </span>
    </div>
  );
};

export default Comment;
