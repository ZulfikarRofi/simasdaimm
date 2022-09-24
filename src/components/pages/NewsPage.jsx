import React from 'react'
import { Container, Row } from 'react-bootstrap'
import NavbarUser from '../navbar/NavbarUser'
import images from '../assets/images/masta-2021.jpg';
import { useParams } from 'react-router-dom';
import { newsEventData } from '../dummy/dummy';

export default function NewsPage() {
    const { id } = useParams();
    let event = newsEventData;
  return (
    <div>
        <NavbarUser />
        {event?.map((item) => (
        <Container className='my-5 pt-5'>
            <Row className='mb-3'>
                <div className='d-flex justify-content-center'>
                    <h1 className='fs-1 fw-bold mt-5'>{item.title}</h1>
                </div>
            </Row>
            <Row>
                <img src={item.image} alt='news images' style={{width:"100%", borderRadius:'8px'}} />
            </Row>
            <Row className='mt-2'>
                <div className='d-flex justify-content-between'>
                    <p className='fw-semibold' style={{fontSize:'15px'}}>{item.date}</p>
                    <p className='' style={{fontSize:'15px'}}>{item.image}</p>
                    <p className='fw-semibold' style={{fontSize:'18px'}}> Publisher : <span style={{fontSize:'16px'}}>{item.publisher}</span></p>
                </div>
                <div className='mt-5'>
                    <p className='description' style={{fontSize:'20px'}}> 
                    {item.Description}
                    </p>
                </div>
            </Row>
        </Container>
        ))}
    </div>
  )
}
