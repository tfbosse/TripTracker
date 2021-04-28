import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <Navbar className='sticky-top' color='light' light expand='md'>
            <NavbarBrand tag={Link} to='/home'>Trip Tracker</NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink tag={Link }to='/reports'>Reports</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/about'>About</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};