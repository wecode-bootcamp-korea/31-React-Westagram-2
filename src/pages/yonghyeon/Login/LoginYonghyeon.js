import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginYonghyeon.scss';

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const isValid = inputValue.id.includes('@') && inputValue.pw.length >= 5;

  const handleInput = e => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleOnClick = () => {
    navigate('/main-yonghyeon');
  };

  return (
    <div className="login">
      <section>
        <div className="loginContainer">
          <h1>Westagram</h1>

          <form>
            <input
              className="loginIdInput"
              type="text"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              autoComplete="off"
              onChange={handleInput}
            />
            <input
              className="loginPwInput"
              type="password"
              name="pw"
              placeholder="비밀번호"
              autoComplete="off"
              onChange={handleInput}
            />
            <input
              className="loginBtn"
              type="submit"
              value="로그인"
              disabled={!isValid}
              onClick={handleOnClick}
            />
          </form>

          <a className="loginTag">비밀번호를 잊으셨나요?</a>
        </div>
      </section>
    </div>
  );
};

export default Login;
