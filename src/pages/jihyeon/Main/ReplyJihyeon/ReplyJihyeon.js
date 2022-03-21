import './ReplyJihyeon.scss';
import { useState, useEffect } from 'react';
const ReplyJihyeon = props => {
  return (
    <div className="replyJihyeon">
      <li className="replyNickNameArea">{props.name}</li>
      <li className="replyContentArea">{props.content}</li>
    </div>
  );
};

export default ReplyJihyeon;
