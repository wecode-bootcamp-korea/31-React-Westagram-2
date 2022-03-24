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

  const handleOnClick = e => {
    e.preventDefault();
    if (isValid) {
      fetch('http://10.58.1.220:8000/users/signin', {
        method: 'POST',
        body: JSON.stringify({
          // name: '',
          email: inputValue.id,
          password: inputValue.pw,
          // phone_number: '',
        }),
        // headers: { AUTHORIZATION: localStorage.getItem('westar-token') },
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.message === 'Invalid Email') {
            return alert('이메일이 존재하지 않습니다.');
          }
          // if (data.message === 'fail') {
          //   return alert('...');
          // }
          if (data.token) {
            localStorage.setItem('강호님조', data.token);
            navigate('/main-yonghyeon');
          }
        });
    }
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

          <div className="loginTag" href="#">
            비밀번호를 잊으셨나요?
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
