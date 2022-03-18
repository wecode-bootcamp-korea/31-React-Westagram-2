import React from 'react';

const UserComment = props => {
  let { comment } = props;
  return (
    <div className="comments">
      <span className="user-name">wecode</span>
      <span className="commnets-desc">{comment}</span>
    </div>
  );
};

export default UserComment;
