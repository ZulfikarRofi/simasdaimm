import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import immlogo from '../assets/logo/imm-logo.png'

export default function NavbarUser() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" className='py-2'>
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
        </Container>
      </Navbar>
    </div>
  )
}
