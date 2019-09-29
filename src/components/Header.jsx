import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/xfinitystream-logo.png';

const Header = props => {
  const { user } = props; // Aquí logramos que la key user, que tiene props, quede en el scope del componente para evitar hacer props.user
  const hasUser = Object.keys(user).length;

  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='xFinity Stream' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <i className='fas fa-user-circle' />
          )}
          <p>Profile</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href='/'>{user.name}</a>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <a href='#logout' onClick={handleLogout}>
                Logout
              </a>
            </li>
          ) : (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
// cuando se hace return explicito (Cuando después de la función flecha se ponen solo los parentesis) no se puede añadir lógica, así que toca añadir el return bien.

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = {
  logoutRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
