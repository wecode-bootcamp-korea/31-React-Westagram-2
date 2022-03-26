import React from 'react';
import './NewPost.scss';

const NewPost = ({ openPostToggle, loading, image, setData }) => {
  const handleClick = () => {
    alert('새 글을 올리시겠습니까?');
    fetch('http://dkjfkslkdjfs.com', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzN9.656GpXLMIpyhK0bPI0PajKbHXKrpwDi6Lj7ajWc31uY',
      },
      body: JSON.stringify({
        text: '새로운 글 작성',
        url: 'https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80',
      }),
    })
      .then(res => res.json())
      .then(
        fetch('http://flskdjflskjdf', { method: 'GET' })
          .then(res => res.json())
          .then(data => {
            setData(data);
          })
      );
    openPostToggle();
  };

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
            <button onClick={handleClick}>공유하기</button>
          </div>
        </header>
        <form className="postForm">
          <div className="imgContainer">
            <input type="file" name="file" placeholder="Upload an image" />
            {/* {loading ? (
              <h3>Loading...</h3>
            ) : (
              <img
                alt="upload"
                src="https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                style={{ width: '300px' }}
              />
            )} */}
          </div>
          <div className="textContainer">
            <div className="profile">
              <div className="profileImg">
                <img alt="myProfile" src="/images/minju/noimage.jpeg" />
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
