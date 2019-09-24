import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/xfinitystream-logo.png';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img className='header__img' src={logo} alt='xFinity Stream' />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <i className='fas fa-user-circle' />
        <p>Profile</p>
      </div>
      <ul>
        <li>
          <a href='/'>Account</a>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
