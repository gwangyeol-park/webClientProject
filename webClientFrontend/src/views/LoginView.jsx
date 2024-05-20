import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import Header from '../components/Header';
import UserService from '../service/UserService';

const LoginView = () => {
  // 사용자명(username)과 비밀번호(password)를 위한 상태(state) 정의
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 사용자명(username)과 비밀번호(password) 입력 값 변경 이벤트 핸들러
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼 클릭 이벤트 핸들러
  const handleLogin = (e) => {
    e.preventDefault();
    let user = {
      email: email,
      password: password
    }
    sessionStorage.setItem("user_name", null);
    UserService.postLogin(user).then((res) => {
      setIsLoggedIn(res.data);
      if(res.data){
        sessionStorage.setItem("user_name", user.email);
        navigate('/home');
      }
      else {
        alert('정확한 email과 password를 입력해 주세요!');
      }
    });
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
                <button className='summit_button' onClick={handleLogin}>continue</button>
            </form>
        </div>
    </>
  )
}

export default LoginView