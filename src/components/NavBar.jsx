import React, { useState } from 'react';
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
  NavbarText
} from 'reactstrap';

const NavigationBar = ({ currentPage, handlePageChange }) => {

  return (
    <div>
      <Navbar color="light" light expand="md" className="navBar">
        <NavbarBrand>Katelin Fallon</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        {/* <Collapse isOpen={isOpen} navbar> */}
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink 
              href="#about"
              onClick={() => handlePageChange('About')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              href="/components/">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contact Me</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        {/* </Collapse> */}
      </Navbar>
    </div>
  );
}

export default NavigationBar;