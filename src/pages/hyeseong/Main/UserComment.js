import React from 'react';

const UserComment = props => {
  let { userName, comment } = props;
  return (
    <div className="comments">
      <span className="user-name">{userName}</span>
      <span className="commnets-desc">{comment}</span>
    </div>
  );
};

export default UserComment;
