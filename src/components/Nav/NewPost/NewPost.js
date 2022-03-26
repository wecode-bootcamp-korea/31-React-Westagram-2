import React from 'react';
import './NewPost.scss';

const NewPost = ({ openPostToggle, loading, image, setData }) => {
  const handleClick = () => {
    alert('새 글을 올리시겠습니까?');
    openPostToggle();
    // TODO : 백엔드와 통신시 사용하는 코드
    // fetch('http://10.58.1.137:8000/postings/post', {
    //   method: 'POST',
    //   headers: {
    //     Authorization:
    //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjB9.fm3iykc49El7OIhJwW6AXRwdnscazvhQYlRSdoq3RV4',
    //   },
    //   body: JSON.stringify({
    //     content: '잘 들어오는지 확인! ',
    //     image_url: '/images/minju/profile8.jpeg',
    //   }),
    // }).then(openPostToggle());
    // fetch('http://10.58.0.151:8000/postings/post', {
    //   method: 'GET',
    //   headers: {
    //     Authorization:
    //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NX0.50Pzi-JKffvbRiSuQmxrOcu-c1CuqIy2z0hvLS4_yrs',
    //   },
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    //   .then(data => {
    //     setData(data.Posting);
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
