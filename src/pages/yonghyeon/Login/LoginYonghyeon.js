import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginYonghyeon.scss';

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const handleInput = e => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const isValid = inputValue.id.includes('@') && inputValue.pw.length >= 5;

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
              value={inputValue.id}
              onChange={handleInput}
            />
            <input
              className="loginPwInput"
              type="password"
              name="pw"
              placeholder="비밀번호"
              value={inputValue.pw}
              onChange={handleInput}
            />
            <input
              className="loginBtn"
              type="button"
              value="로그인"
              disabled={!isValid}
              onClick={() => {
                navigate('/main-yonghyeon');
              }}
            />
          </form>

          <a className="loginTag" herf="#">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </section>
    </div>
  );
};

export default Login;
