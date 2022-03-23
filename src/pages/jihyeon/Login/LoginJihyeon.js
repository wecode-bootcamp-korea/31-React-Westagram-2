import React, { useState, useEffect } from 'react';
import './LoginJihyeon.scss';
import { useNavigate } from 'react-router-dom';
import MainJihyeon from '../Main/MainJihyeon';

function LoginJihyeon() {
  //// 이전
  const [enteredId, setEnteredId] = useState('');
  const [enteredPw, setEnteredPw] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);

  const idChangeHandler = event => {
    setEnteredId(event.target.value);
  };

  const pwChangeHandler = event => {
    setEnteredPw(event.target.value);
  };

  const checkInput = event => {
    enteredId.includes('@') && enteredPw.length >= 5
      ? setCanSubmit(true)
      : setCanSubmit(false);
  };
  const submitLoginHandler = event => {
    event.preventDefault();
    if (canSubmit) {
      fetch('http://10.58.2.8:8000/users/signin', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredId,
          password: enteredPw,
        }),
      })
        .then(response => response.json())
        .then(response => {
          if (response.access_token) {
            localStorage.setItem('wtw-token', response.access_token);
          }
        });

      setEnteredId('');
      setEnteredPw('');
      setCanSubmit(false);
    }
  };

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-jihyeon');
  };

  //// JSX

  return (
    <div className="loginJihyeon">
      {/* 모달창 바깥 */}
      <div className="outsideWindow" onClick={goToMain} />

      {/* 기능 내용 내부 */}
      <form className="loginWindow" onSubmit={submitLoginHandler}>
        <span className="logoForLoginWindow">Westagram</span>
        <input
          className="idInputField"
          type="text"
          placeholder="아이디"
          onChange={idChangeHandler}
          onKeyUp={checkInput}
          value={enteredId}
        />
        <input
          className="pwInputField"
          type="password"
          placeholder="비밀번호(5자 이상)"
          onChange={pwChangeHandler}
          onKeyUp={checkInput}
          value={enteredPw}
        />
        <input
          type="submit"
          className={
            canSubmit ? 'abledloginSubmitBtn' : 'disabledloginSubmitBtn'
          }
          onClick={submitLoginHandler}
          value="제출"
        />
        <button className="showNewAccountBtn">회원가입이 필요하신가요?</button>
        <button className="showFindPwBtn">
          아이디나 비밀번호를 잊으셨나요?
        </button>
      </form>
      {/* 모달창 바깥 보이게 */}
      <MainJihyeon />
    </div>
  );
}

export default LoginJihyeon;
