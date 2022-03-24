import React from 'react';
import './MainHyeseong.scss';
import UserComment from './UserComment';
import { useState, useEffect } from 'react';

const Feed = ({
  feed: {
    userProfileImg,
    userName,
    userLocation,
    content,
    thumbnail,
    likesCount,
    commentList,
  },
}) => {
  let [commentInputValue, setCommentInputValue] = useState('');
  let [isActice, setIsActice] = useState(false);
  let [comments, setComments] = useState([...commentList]);

  const handleCommnetInput = e => {
    const { value } = e.target;
    commentInputValue = value;
    setCommentInputValue(commentInputValue);
  };

  const addComment = e => {
    const commentArr = [...comments]; //copy
    commentArr.push({
      id: commentArr.length + 1,
      userName: 'moooo_nhs',
      content: commentInputValue,
      isLiked: false,
    });
    setComments(commentArr);
    setCommentInputValue('');

    e.preventDefault();
  };

  const checkInput = () => {
    let removeSpace = commentInputValue.replace(/(\s*)/g, '');
    let isEmpty = removeSpace === '';
    setIsActice(!isEmpty);
  };

  useEffect(() => {
    checkInput();
  });

  return (
    <div className="feed">
      <div className="user-cell">
        <img alt="profile-img" src={userProfileImg} className="porfile-img" />
        <div className="user-cell-text">
          <span className="user-id">{userName}</span>
          <span className="user-cell-desc">{userLocation}</span>
        </div>
        <i className="fa-solid fa-ellipsis" />
      </div>
      <div className="articleImage">
        <img alt="thumbnail" className="iamgeThumbnail" src={thumbnail} />
      </div>
      <div className="articleIcons">
        <div className="iconsLeft">
          <i id="articleHeart" className="fa-regular fa-heart fa-xl" />
          <i className="fa-regular fa-comment fa-xl" />
          <i className="fa-solid fa-arrow-up-from-bracket fa-xl" />
        </div>
        <i className="fa-regular fa-bookmark fa-xl" />
      </div>

      <div className="articleComments">
        <div className="likesCount">
          <img alt="likes-count-profile" src="images/hyeseong/핑구.jpeg" />
          <span>aineworld</span>
          님&nbsp;
          <span>외 {likesCount}명</span>이 좋아합니다
        </div>
        <div className="posterCommnets">
          <div className="comments">
            <span className="user-name">{userName}</span>
            <span className="commnets-desc">{content}</span>
          </div>
        </div>
        <ul className="userCommnets">
          {comments.map(comment => {
            return (
              <UserComment
                key={comment.id}
                userName={comment.userName}
                comment={comment.content}
              />
            );
          })}
        </ul>
      </div>
      <span className="timeStamp">1시간 전</span>
      <div className="inputComments">
        <button className="inputEmoji">
          <i className="fa-regular fa-face-smile fa-xl" />
        </button>
        <form
          className="commnetForm"
          onSubmit={e => {
            addComment(e);
          }}
        >
          <input
            className="commentInput"
            id="commnetInput"
            type="text"
            placeholder="댓글 달기..."
            autoComplete="off"
            required
            value={commentInputValue}
            onChange={e => {
              handleCommnetInput(e);
            }}
          />
          <button
            id="commnetButton"
            className={`commentSubmit ${
              isActice ? 'active-btn' : 'deactive-btn'
            }`}
            type="submit"
            disabled={!isActice}
          >
            게시
          </button>
        </form>
      </div>
    </div>
  );
};
export default Feed;
