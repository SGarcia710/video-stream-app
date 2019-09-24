import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';

const Login = props => {
  const [form, setValues] = useState({
    email: ''
  });

  const handleInput = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Login</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            name='email'
            placeholder='E-mail'
            onChange={handleInput}
          />
          <input
            className='input'
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleInput}
          />
          <button className='button'>Login</button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='checkbox' />
              Remember me
            </label>
            <a href='/'>I forgot my password</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <i className='fab fa-google' />
            Login with your Google account
          </div>
          <div>
            <i className='fab fa-twitter' />
            Login with your Twitter account
          </div>
        </section>
        <p className='login__container--signup'>
          Create a new account <Link to='/signup'>here</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
