import React from 'react';

import { Footer } from './Footer';
import { NavBar } from './NavBar';

import '../css/layout.css';

export const Layout = ({ children }) => {
  return (
    <div className='d-flex flex-column mask ttLayout'>
      <NavBar />

      <div className='container flex-grow-1'>
        {children}
      </div>

      <Footer />
    </div>
  );
}
