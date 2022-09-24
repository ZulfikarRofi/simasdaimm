import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import immlogo from '../assets/logo/imm-logo.png';
import logout from '../assets/logo/logout.png';
import profile from '../assets/logo/profile.png';

export default function NavbarUser() {
  return (
    <div>
        <Navbar fixed='top bg-navbar' variant="dark" className='py-2'>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt='logo'
              src={immlogo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav>
          {/* ------------ Dropdown Data Master ------------ */}
          <NavDropdown title="Data Master" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/kader">Data Kader</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Perangkat IMM</NavDropdown.Item>
          </NavDropdown>
          {/* ------------ Dropdown Users Menu ------------ */}
          <NavDropdown title="Admin" className='ms-4' id="collasible-nav-dropdown">
            <NavDropdown.Item href="/publish">Publish Content</NavDropdown.Item>
            <NavDropdown.Item href="/list-content">Content List</NavDropdown.Item>
            </NavDropdown>
            {/* ------------ Dropdown Account ------------ */}
            <NavDropdown title={ <img src='' alt='Profile' style={{width:"50px", borderRadius:'50px'}}/> } className='ms-4' id="collasible-nav-dropdown">
            <NavDropdown.Item href='/profile'>
              <div style={{display:'flex', flexDirection:'row'}}>
              <img src={profile} alt='profile' style={{width:'30px', height:'30px'}} />
              <p className='ms-2'>Profile</p>
              </div>
              </NavDropdown.Item>
            <NavDropdown.Item>
              <div style={{display:'flex', flexDirection:'row'}}>
              <img src={logout} alt='logout' style={{width:'30px', height:'30px'}} />
              <p className='ms-2'>Log out</p>
              </div>
            </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
