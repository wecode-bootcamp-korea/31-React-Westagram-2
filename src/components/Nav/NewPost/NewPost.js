import React from 'react';
import './NewPost.scss';

const NewPost = ({ openPostToggle }) => {
  return (
    <div className="newPost">
      <div className="overlay">
        <i className="fa-solid fa-x" onClick={openPostToggle} />
      </div>
      <div className="newPostBody">
        <header>
          <div className="goBackArrow">
            <i className="fa-solid fa-arrow-left" />
          </div>
          <div className="text">
            <h4>새 게시물 만들기</h4>
          </div>
          <div className="shareBtnBox">
            <button>공유하기</button>
          </div>
        </header>
        <form className="postForm">
          <div className="imgContainer">
            <input type="file" />
          </div>
          <div className="textContainer">
            <div className="profile">
              <div className="profileImg">
                <img alt="profile" src="/images/minju/noimage.jpeg" />
              </div>
              <div className="profileName">minjuKim</div>
            </div>
            <div className="content">
              <textarea placeholder="문구 입력..." />
              <div className="emojiAndTextContainer">
                <div className="emojis">
                  <i className="fa fa-face-smile" />
                </div>
                <div className="textCounter">
                  <span>0/2,200</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
