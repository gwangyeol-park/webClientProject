import React from 'react';
import "../assets/css/Header.css";
import "../assets/css/Reset.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='nav'>
      <Link to="/">
        <span className='title'>아이디어 팜</span>
      </Link>
      <Link to="/login">
        <span className='login'>login</span>
      </Link>
      <Link to="/signup">
        <span className='signup'>sign up</span>
      </Link>
    </div>
  )
}

export default Header