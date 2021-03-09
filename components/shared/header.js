


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
  const {title, href} = props
  return (
    <NavItem className="port-navbar-item">
      <Link href={href}>
        <a className="nav-link port-navbar-link clickable">
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
  <a className="nav-link port-navbar-link clickable" href="/api/v1/login">Login</a>
  // <BsNavLink title="Login" href="/api/v1/login" />

const LogoutLink = () => 
  <a className="nav-link port-navbar-link clickable" href="/api/v1/logout">Logout</a>
  // <BsNavLink title="Logout" href="/api/v1/logout" />

const Header  = ({user, loading}) => {

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
              <BsNavLink title="Home" href="/"/>
              <BsNavLink title="Portfolios" href="/portfolios"/>
              <BsNavLink title="Blogs" href="/blogs"/>
              <BsNavLink title="Resume" href="/cv"/>
              <BsNavLink title="About" href="/about"/>
              <> { user && <BsNavLink title="Secret" href="/secret"/> } </>
              <> { user && <BsNavLink title="SecretSSR" href="/secretssr"/> } </>
              <> { user && <BsNavLink title="Admin" href="/onlyadmin"/> } </>
              <> { user && <BsNavLink title="AdminSSR" href="/onlyadminssr"/> } </>
          </Nav>
          <Nav>
          { !loading && 
            <>
              { user && 
                // <span className="port-navbar port-default" >{user.name}</span>
                <BsNavLink title={user.name} href="/api/v1/me"/>

              }
            </>
            }
          </Nav>
          <Nav>
            { !loading && 
            <>
              { user && 
                <LogoutLink />
              }
              { !user && 
                <LoginLink />          
              }
            </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    );
}

export default Header;
