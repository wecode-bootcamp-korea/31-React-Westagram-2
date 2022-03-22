import React, { useState } from 'react';
import './LoginHyesong.scss';
import { useNavigate } from 'react-router-dom';

const LoginHyeseong = () => {
  let [idInputValue, setIdInputValue] = useState('');
  let [pwdInputValue, setPwdInputValue] = useState('');
  let [isActice, setIsActice] = useState(false);

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-hyeseong');
  };

  const handleIdInput = e => {
    const { value } = e.target;
    idInputValue = value;
    setIdInputValue(idInputValue);
  };

  const handlePwdInput = e => {
    const { value } = e.target;
    pwdInputValue = value;
    setPwdInputValue(pwdInputValue);
  };
  const checkInput = () => {
    const check = idInputValue.indexOf('@') === -1 || pwdInputValue.length < 5;
    setIsActice(!check);
  };

  return (
    <div className="LoginHyeseong">
      <div className="loginContainer">
        <span className="logo" id="logo-login">
          Westagram
        </span>
        <input
          id="id"
          className="login-input"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={e => {
            handleIdInput(e);
            checkInput();
          }}
        />
        <input
          id="password"
          className="login-input"
          type="password"
          placeholder="비밀번호"
          onChange={e => {
            handlePwdInput(e);
            checkInput();
          }}
        />
        <div className="goto-main">
          <button
            className={isActice ? 'active-login-btn' : 'deactive-login-btn'}
            id="login-btn"
            onClick={() => {
              goToMain();
            }}
            disabled={!isActice}
          >
            로그인
          </button>
        </div>
        <a id="find-pwd" href=" ">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default LoginHyeseong;
