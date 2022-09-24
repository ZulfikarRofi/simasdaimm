import React from 'react'
import { Button, Container, Form, FormControl, FormLabel } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
    let navigate = useNavigate();

    return (
      <Container fluid className='jc-center bg-white vh-100 align-items-center' style={{display:'flex', flexDirection:'row' , alignItems:'center', justifyContent:'center'}}>
        <div className='bg-light login-page-shape p-5' style={{width:"40%"}}>
          <Form>
            <FormLabel className='fs-2 fw-bold mb-4'>Login</FormLabel>
            <FormControl type='email' className='mb-3 inputMaroon' name='email' placeholder='Email' />
            <FormControl type='password' className='mb-3 inputMaroon' name='password' placeholder='Password' />
            <Button className='buttonMaroon' style={{width:"100%"}}>Login</Button>
          </Form>
          <p className='muted-text' style={{textAlign:'center'}}>Have any problems ? chat the <span className='fw-bold' onClick={() => navigate('/')} style={{textDecoration:'none', color:'#234395'}}> admin </span> or <Link to='/' className='fw-bold' style={{textDecoration:'none', color:'#234395'}}> technician </Link> here !</p>
        </div>
      </Container>
    )
}
