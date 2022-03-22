import React, { useState } from 'react';
import './LoginHyesong.scss';
import { useNavigate } from 'react-router-dom';

const LoginHyeseong = () => {
  let [idInputValue, setIdInputValue] = useState('');
  let [pwdInputValue, setPwdInputValue] = useState('');
  let [isActice, setIsActice] = useState('deactive');
  let [isdisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-hyeseong');
  };

  const handleIdInput = e => {
    idInputValue = e.target.value;
    setIdInputValue(idInputValue);
  };

  const handlePwdInput = e => {
    pwdInputValue = e.target.value;
    setPwdInputValue(pwdInputValue);
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
    idInputValue.indexOf('@') === -1 || pwdInputValue.length < 5
      ? deActivateBtn()
      : activateBtn();
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
        <div to="/Main" className="goto-main" href="main.html">
          <button
            className={`${isActice}-login-btn`}
            id="login-btn"
            onClick={() => {
              goToMain();
            }}
            disabled={isdisabled}
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
