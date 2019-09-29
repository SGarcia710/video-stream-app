import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signupRequest } from '../actions';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Signup.scss';

const Signup = props => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: ''
  });
  const handleInput = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.signupRequest(form);
    props.history.push('/');
  };
  return (
    <section className='signup'>
      <section className='signup__container'>
        <h2>Create your account</h2>
        <form className='signup__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            name='name'
            placeholder='Name'
            onChange={handleInput}
            id=''
          />
          <input
            className='input'
            type='text'
            name='email'
            placeholder='E-mail'
            onChange={handleInput}
            id=''
          />
          <input
            className='input'
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleInput}
            id=''
          />
          <button className='button'>Sign up</button>
        </form>
        <p className='signup__container--login'>
          <Link to='/login'>Login</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  signupRequest
};

export default connect(
  null,
  mapDispatchToProps
)(Signup);
