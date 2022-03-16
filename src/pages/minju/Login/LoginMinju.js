import React from 'react';
import './LoginMinju.scss';
import { Link, useNavigate } from 'react-router-dom';

function LoginMinju() {
  const navigate = useNavigate();
  const goToMain = () => {
    // 아이디에 @ 포함되어있고, 비밀번호가 5 글자 이상이면
    navigate('/main-minju');
  };

  return (
    <div className="login">
      <h1 className="logo">Westagram</h1>
      <form action="./main.html" method="get" className="loginForm">
        <input
          className="loginForm__id"
          required
          placeholder="전화번호, 사용자 이름 또는 이메일"
          type="text"
        />
        <input
          className="loginForm__pwd"
          required
          placeholder="비밀번호"
          type="password"
        />
        <Link to="/main-minju">
          <button onClick={goToMain} className="loginForm__submit">
            로그인
          </button>
        </Link>
        {/* <Link to="/main"><button className="loginForm__submit">로그인</button></Link> */}
      </form>
      <span className="forgotPasswordBtn">비밀번호를 잊으셨나요?</span>
    </div>
  );
}

export default LoginMinju;
