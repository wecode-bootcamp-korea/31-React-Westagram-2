import React, { useEffect, useState } from 'react';
import './LoginMinju.scss';
import { useNavigate } from 'react-router-dom';

function LoginMinju() {
  const navigate = useNavigate();
  const goToMain = () => {
    // 아이디에 @ 포함되어있고, 비밀번호가 5 글자 이상이면
    navigate('/main-minju');
  };

  const [newInput, setNewInput] = useState({
    id: '',
    password: '',
  });
  const [isValid, setIsValid] = useState(false);

  const handleInput = event => {
    const { name, value } = event.target;
    setNewInput(prevValue => ({ ...prevValue, [name]: value }));
  };

  useEffect(() => {
    setIsValid(
      newInput.id.includes('@') && newInput.password.length > 4 ? true : false
    );
  }, [newInput]);

  // let isValid =
  //   newInput.id.includes('@') && newInput.password.length > 4 ? true : false;

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
