import React from 'react';
import './LoginJihyeon.scss';
import { useNavigate } from 'react-router-dom';

function LoginJihyeon() {
  const navigate = useNavigate();

  const goToMain = function () {
    navigate('/main-jihyeon');
  };

  return (
    <div className="loginJihyeon" onClick={goToMain}>
      <form className="loginWindow">
        <span className="logoForLoginWindow">Westagram</span>
        <input type="text" className="idInputField" placeholder="메일주소" />
        <input
          type="password"
          className="pwInputField"
          placeholder="비밀번호(5자 이상)"
        />
        <input type="submit" className="loginSubmitBtn" value="제출" />
        <span className="showInputStatus">비밀번호가 짧습니다</span>
        <button className="showNewAccountBtn">회원가입이 필요하신가요?</button>
        <button className="showFindPwBtn">
          아이디나 비밀번호를 잊으셨나요?
        </button>
      </form>
    </div>
  );
}

export default LoginJihyeon;
