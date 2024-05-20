import React, { useState } from 'react'
import Header from '../components/Header'
import UserService from '../service/UserService';

const SignupView = () => {
  // 사용자명(username)과 비밀번호(password)를 위한 상태(state) 정의
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 사용자명(username)과 비밀번호(password) 입력 값 변경 이벤트 핸들러
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼 클릭 이벤트 핸들러
  const handleSignUp = () => {
    let user = {
      email: email,
      password: password
    }
    UserService.postUser(user);
    alert('회원가입 완료했습니다!');
  };

  return (
    <>
    <Header/>
    <div className='login_container'>
      <form className='login_form'>
        <input
          id='login_email' 
          type='text'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
        />
        <input
          id='login_password'
          type='text' 
          placeholder='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button className='summit_button' onClick={handleSignUp}>sign up</button>
      </form>
    </div>
    </>
  )
}

export default SignupView