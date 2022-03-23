import React, { useState, useEffect } from 'react';
import './LoginHyesong.scss';
import { useNavigate } from 'react-router-dom';

const LoginHyeseong = () => {
  let [email, setemail] = useState('');
  let [password, setpassword] = useState('');
  let [isActice, setIsActice] = useState(false);
  // let [loginInputValue,setLoginInputValue ] = useState({
  //   id: "",
  //   pwd:"",
  // })
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-hyeseong');
  };

  const handleIdInput = e => {
    const { value } = e.target;
    email = value;
    setemail(email);
  };

  const handlePwdInput = e => {
    const { value } = e.target;
    password = value;
    setpassword(password);
  };
  const checkInput = () => {
    const check = email.indexOf('@') === -1 || password.length < 5;
    setIsActice(!check);
  };
  useEffect(() => {
    checkInput();
  });
  return (
    <div className="LoginHyeseong">
      <div className="loginContainer">
        <span className="logo" id="logo-login">
          Westagram
        </span>
        <input
          id="id"
          className="login-input"
          value={email}
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
          value={password}
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
              fetch('http://10.58.1.208:8000/users/signin', {
                method: 'POST',
                body: JSON.stringify({
                  email: email,
                  password: password,
                }),
              })
                .then(response => response.json())
                .then(result =>
                  result.token ? goToMain() : alert(result.message)
                );
            }}
            disabled={!isActice}
          >
            로그인
          </button>
          <button
            className={isActice ? 'active-login-btn' : 'deactive-login-btn'}
            id="login-btn"
            onClick={() => {
              fetch('http://10.58.1.208:8000/users/signup', {
                method: 'POST',
                body: JSON.stringify({
                  name: 'Moon',
                  email: email,
                  password: password,
                  phone: '01088888888',
                }),
              })
                .then(response => response.json())
                .then(result => alert(result.message));
              setemail('');
              setpassword('');
            }}
          >
            회원가입
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
