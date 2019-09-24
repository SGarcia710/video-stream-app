import React from 'react';
import '../assets/styles/components/ErrorNotFound.scss';

const ErrorNotFound = () => (
  <>
    <div className='error'>
      <p className='error__code animated pulse'>404</p>
      <p className='error__text'>Page not found</p>
    </div>
  </>
);

export default ErrorNotFound;
