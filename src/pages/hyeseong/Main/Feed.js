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
    commentList,
  },
}) => {
  let [commentInputValue, setCommentInputValue] = useState('');
  let [isActice, setIsActice] = useState('deactive');
  let [isdisabled, setIsDisabled] = useState(true);
  let submitBtnClassName = `${isActice}-btn`;
  let [comments, setComments] = useState([...commentList]);

  useEffect(() => {
    checkInput();
  }, [commentInputValue]);

  const handleCommnetInput = e => {
    let comment = e.target.value; //copy
    commentInputValue = comment;
    setCommentInputValue(commentInputValue);
  };

  const addComment = e => {
    let commentArr = [...comments]; //copy
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

  const activateBtn = () => {
    setIsActice('active');
    setIsDisabled(false);
  };

  const deActivateBtn = () => {
    setIsActice('deactive');
    setIsDisabled(true);
  };

  const checkInput = () => {
    let emptyCheck = commentInputValue.replace(/(\s*)/g, '');
    emptyCheck === '' ? deActivateBtn() : activateBtn();
  };

  return (
    <div className="post">
      <div className="user-cell">
        <img alt="profile-img" src={userProfileImg} className="porfile-img" />
        <div className="user-cell-text">
          <span className="user-id">{userName}</span>
          <span className="user-cell-desc">{userLocation}</span>
        </div>
        <i className="fa-solid fa-ellipsis" />
      </div>
      <div className="article-iamge">
        <img alt="thumbnail" className="iamge-thumbnail" src={thumbnail} />
      </div>
      <div className="article-icons">
        <div className="icons-left">
          <i id="articleHeart" className="fa-regular fa-heart fa-xl" />
          <i className="fa-regular fa-comment fa-xl" />
          <i className="fa-solid fa-arrow-up-from-bracket fa-xl" />
        </div>
        <i className="fa-regular fa-bookmark fa-xl" />
      </div>

      <div id="articleConnents" className="article-comments">
        <div className="likes-count">
          <img alt="likes-count-profile" src="images/hyeseong/핑구.jpeg" />
          <span>aineworld</span>
          님&nbsp;
          <span>외 10명</span>이 좋아합니다
        </div>
        <div className="poster-commnets">
          <div className="comments">
            <span className="user-name">{userName}</span>
            <span className="commnets-desc">{content}</span>
          </div>
        </div>
        <ul className="user-comments">
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
      <span className="time-stamp">1시간 전</span>
      <div className="input-comments">
        <button className="input-emoji">
          <i className="fa-regular fa-face-smile fa-xl" />
        </button>
        <form
          className="commnet-form"
          onSubmit={e => {
            addComment(e);
          }}
        >
          <input
            className="comment-input"
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
            className={`commentSubmit ${submitBtnClassName}`}
            type="submit"
            disabled={isdisabled}
          >
            게시
          </button>
        </form>
      </div>
    </div>
  );
};
export default Feed;
