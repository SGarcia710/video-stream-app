import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/xfinitystream-logo.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='' />
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
          <a href='/'>Logout</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
