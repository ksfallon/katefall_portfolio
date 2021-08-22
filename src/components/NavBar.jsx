import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import './Pages/NavBar.css'
import WebFont from 'webfontloader';

const NavigationBar = ({ currentPage, handlePageChange }) => {

  return (
    <div>
      <Navbar color='info' light expand="md" className="navBar">
        <NavbarBrand id='myName' style={{fontFamily: 'Rampart One'}}>Katelin Fallon</NavbarBrand>
          <Nav className="ms-auto" style={{fontFamily: 'Fredoka One'}} navbar>
            <NavItem className="navItem text-right">
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

            <NavItem className="navItem text-right">
              <NavLink 
                href="#project"
                onClick={() => handlePageChange('Projects')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                  Projects
              </NavLink>
            </NavItem>

            <NavItem className="navItem text-right">
              <NavLink 
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                  Contact Me
                </NavLink>
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
        {/* </Collapse> */}
      </Navbar>
    </div>
  );
}

export default NavigationBar;