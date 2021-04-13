import React from 'react';

export const Footer = () => {
    return (
        <footer className='bg-dark px-3 py-2 text-light'>
            Copyright &copy; {new Date().getFullYear()} Thomas Bosse
        </footer>
    );
};