import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Signup.scss';

const Signup = () => (
  <section className='signup'>
    <section className='signup__container'>
      <h2>Create your account</h2>
      <form className='signup__container--form'>
        <input className='input' type='text' name='' placeholder='Name' id='' />
        <input
          className='input'
          type='text'
          name=''
          placeholder='E-mail'
          id=''
        />
        <input
          className='input'
          type='password'
          name=''
          placeholder='Password'
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

export default Signup;
