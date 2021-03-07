


import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import Link from 'next/link';

const BsNavLink = (props) => {
  const {title, hrefroute} = props
  return (
    <NavItem className="port-navbar-item">
      <Link href={hrefroute}>
        <a className="nav-link port-navbar-link">
        {title}
        </a>
      </Link>
    </NavItem>

  )
}

const BsNavBrand = () =>
  <Link href="/">
    <a className="navbar-brand port-navbar-brand"> Earl Waud </a>
  </Link>

const LoginLink = () => 
  <span className="nav-link port-navbar-link">Login</span>

const LogoutLink = () => 
  <span className="nav-link port-navbar-link">Logout</span>

const Header  = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return (
      <Navbar 
        className="port-navbar port-default absolute" 
        color="transparent" 
        dark 
        expand="md">
        <BsNavBrand />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <BsNavLink title="Home" hrefroute="/"/>
              <BsNavLink title="Portfolios" hrefroute="/portfolios"/>
              <BsNavLink title="Blogs" hrefroute="/blogs"/>
              <BsNavLink title="Resume" hrefroute="/cv"/>
              <BsNavLink title="About" hrefroute="/about"/>
          </Nav>
          <Nav>
            <NavItem className="nav-link port-navbar-link clickable">
              <LoginLink />
            </NavItem>
            <NavItem className="nav-link port-navbar-link clickable">
              <LogoutLink />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
}

export default Header;
