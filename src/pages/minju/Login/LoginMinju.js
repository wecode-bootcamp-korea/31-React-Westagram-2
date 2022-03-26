import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginMinju.scss';

function LoginMinju() {
  const navigate = useNavigate();
  const [newInput, setNewInput] = useState({
    id: '',
    password: '',
  });
  let isValid = newInput.id.includes('@') && newInput.password.length > 4;

  const handleInput = event => {
    const { name, value } = event.target;
    setNewInput(prevValue => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    isValid
      ? navigate('/main-minju')
      : alert('아이디와 비밀번호를 확인해주세요');
    //TODO : 백엔드와 통신시 사용하는 코드
    // ? fetch('http://10.58.1.137:8000/users/signin', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email: newInput.id,
    //       password: newInput.password,
    //       name: '김민주',
    //       phone_number: '010 0000 0000',
    //     }),
    //   })
    //     .then(res => res.json())
    //     .then(navigate('/main-minju'))
    // : alert('아이디와 비밀번호를 확인해주세요');
  };

  return (
    <div className="login">
      <h1 className="logo">Westagram</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          name="id"
          value={newInput.id}
          onChange={handleInput}
          className="loginForm__id"
          required
          placeholder="전화번호, 사용자 이름 또는 이메일"
          type="text"
        />
        <input
          name="password"
          value={newInput.password}
          onChange={handleInput}
          className="loginForm__pwd"
          required
          placeholder="비밀번호"
          type="password"
        />
        <button className={isValid ? 'valid' : ''}>로그인</button>
      </form>
      <span className="forgotPasswordBtn">비밀번호를 잊으셨나요?</span>
    </div>
  );
}

export default LoginMinju;
