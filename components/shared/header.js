


import React, { useDebugValue, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import Link from 'next/link';

import { isAuthorized } from '@/utils/auth0'

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

  const isAdmin = isAuthorized(user, "admin");

  console.log("isAdmin:", isAdmin)

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
              <> { user && isAdmin && <BsNavLink title="Admin" href="/onlyadmin"/> } </>
              <> { user && isAdmin && <BsNavLink title="AdminSSR" href="/onlyadminssr"/> } </>
          </Nav>
          <Nav>
          { !loading && 
            <>
              { user && <>
                <img src={user.picture} className="profile-picture" />
                <BsNavLink title={user.nickname} href="/user"/>
                </>
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
