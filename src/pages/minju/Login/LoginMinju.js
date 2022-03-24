import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginMinju.scss';

function LoginMinju() {
  const navigate = useNavigate();
  const goToMain = () => {
    // fetch('http://10.58.2.210:8000/users/signin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: newInput.id,
    //     password: newInput.password,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     if (res.message === 'SUCCESS') {
    //       navigate('/main-minju');
    //     } else {
    //       alert('아이디와 비밀번호를 다시 확인해주세요.');
    //     }
    //   });
    navigate('/main-minju');
  };

  const [newInput, setNewInput] = useState({
    id: '',
    password: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setNewInput(prevValue => ({ ...prevValue, [name]: value }));
  };

  let isValid = newInput.id.includes('@') && newInput.password.length > 4;

  return (
    <div className="login">
      <h1 className="logo">Westagram</h1>
      <form className="loginForm">
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
        <button
          onClick={goToMain}
          className={isValid ? 'valid' : ''}
          disabled={!isValid}
        >
          로그인
        </button>
      </form>
      <span className="forgotPasswordBtn">비밀번호를 잊으셨나요?</span>
    </div>
  );
}

export default LoginMinju;
