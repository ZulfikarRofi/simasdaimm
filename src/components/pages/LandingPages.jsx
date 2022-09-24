import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import NavbarUser from '../navbar/NavbarUser';
import images from '../assets/images/masta-2021.jpg';
import cardImages from '../assets/images/Pelantikan.jpg';
import { headlineData } from '../dummy/dummy';
import { newsEventData } from '../dummy/dummy';
import { Link } from 'react-router-dom'

export default function LandingPages() {
  let headLine = headlineData;
  let event = newsEventData;
  return (
    <div>
        <NavbarUser />
        <Container className='my-5 pt-5'>
          {headLine?.map((item, ) => (
            <Row className='mb-4'>
              <h1 className='mb-3'>Headline News</h1>
              <Card className='px-0'>
              <Card.Img variant='top' src={item.image} alt='card images' />
                <Card.Body>
                  <Card.Title className='headlineTitle mb-2'>{item.title}</Card.Title>
                    <div className='top-bottom-border p-2 mb-2'>
                      <Card.Text className='headlineFill' style={{color:'#000000'}}>{item.description}</Card.Text>
                    </div>
                    <p className='fw-semibold bg-white' style={{color:'gray', textAlign:'right'}}>Publisher : {item.publisher}</p>
                </Card.Body>
              </Card>
            </Row>
            ))}
            {event?.map((item) => (
            <Row>
              <h2 className='mb-4'>News and Event</h2>
              <Col>
                <Link to={`/detail/${item.id}`} className='text-decoration-none' >
                  <Card style={{width: "18rem", borderRadius: "3px", backgroundColor:'#d4f5f9'}}>
                    <Card.Img variant='top' src={item.image} alt='card images' />
                    <Card.Body>
                      <Card.Title className='fw-bold' style={{color:'#000000'}}>{item.title}</Card.Title>
                      <Card.Text className='fw-semibold' style={{color:'#000000'}}>{item.caption}</Card.Text>
                      <p className='muted-text' style={{textAlign:'right'}}>more information...</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
            ))}
        </Container>
    </div>
  )
}
