import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarUser from '../navbar/NavbarUser'
import profileexam from '../assets/images/MUH SASMITO ADI WIBOWO.JPG'

export default function ProfilePage() {
  return (
    <div>
        <NavbarUser />
        <Container className='my-5 pt-5 d-flex justify-content-center'>
            <div className='profile-shape bg-white mt-5 p-5'>
                <div className='d-flex justify-content-center mb-3'>
                    <img className='circleShadow' src={profileexam} alt='profile' style={{width:'100px', borderRadius:'50px'}} />
                </div>
                <div className='d-flex justify-content-center' style={{width:'fitContent'}}>
                    <p className='fs-3 fw-bold m-0' style={{width:'fit-content'}}>Budi Setiawan</p>
                </div>
                <div className='d-flex justify-content-center lightBorderBottom'>
                    <p className='muted-text'>Elmacife - Teknik Mesin</p>
                </div>
                <div>
                    
                </div>
            </div>
        </Container>
    </div>
  )
}
