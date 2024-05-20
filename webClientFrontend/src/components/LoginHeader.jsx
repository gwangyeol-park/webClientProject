import React from 'react';
import "../assets/css/Header.css";
import "../assets/css/Reset.css";
import "../assets/css/LoginHeader.css"
import { Link } from "react-router-dom";

const LoginHeader = () => {

  const logoutHandle = () => {
    sessionStorage.setItem('user_name', null);
  }

  return (
    <>
    <div className='nav'>
      <Link to="/home">
        <span className='title'>아이디어 팜</span>
      </Link>
      <Link to="/myPage">
        <span className='my_page'>My Page</span>
      </Link>
      <Link to="/">
        <span className='logout' onClick={logoutHandle}>logout</span>
      </Link>
    </div>
    </>
  )
}

export default LoginHeader