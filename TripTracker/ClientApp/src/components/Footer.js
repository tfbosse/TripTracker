import React from 'react';

export const Footer = () => {
    return (
        <footer className='bg-light px-3 py-2 text-dark'>
            Copyright &copy; {new Date().getFullYear()} Thomas Bosse
        </footer>
    );
};