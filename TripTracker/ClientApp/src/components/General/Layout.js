import React from 'react';

import { Footer } from './Footer';
import { NavBar } from './NavBar';

import '../../css/layout.css';

export const Layout = ({ children }) => {
  return (
    <div className='d-flex flex-column mask ttLayout'>
      <NavBar />

      <div className='container d-flex flex-column flex-grow-1 justify-content-center'>
        {children}
      </div>

      <Footer />
    </div>
  );
}
