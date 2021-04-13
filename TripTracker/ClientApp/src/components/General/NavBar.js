import React, { useState } from 'react';

import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <Navbar className='sticky-top' color='light' light expand='md'>
            <NavbarBrand href='/'>Trip Tracker</NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink disabled href='/'>Reports</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href='/'>About</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};