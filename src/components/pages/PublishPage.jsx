import React from 'react'
import { Button, Col, Container, Form, FormControl, FormLabel, Row } from 'react-bootstrap';
import NavbarUser from '../navbar/NavbarUser';
import upload from '../assets/logo/upload.png';
import preview from '../assets/logo/no-images.png';

export default function PublishPage() {
  return (
    <div>
        <NavbarUser />
        <Container className='my-5 pt-5'>
            <h1 className='fs-5 fw-semibold mt-3 mb-5'>Add New Content Page</h1>
            <div className='form-shape p-5'>
                <Form>
                    <div className='d-flex justify-content-center mb-3 borderBottom'>
                        <FormLabel className='fs-3 fw-bold' style={{textAlign:'center'}}>News and Event</FormLabel>
                    </div>
                    <Row className='mt-4'>
                        <Col xs={12} md={7}>
                            <Row>
                                <FormControl type='text' className='inputCyan mb-3' name='title' placeholder='News or Event Titles' />
                                <FormControl type='text' className='inputCyan mb-3' name='caption' placeholder='News or Event Captions' />
                                <Col className='px-0' xs={12} md={7}>
                                    <FormControl type='text' className='inputCyan mb-3' name='publisher' placeholder='Publisher' style={{width:'100%'}} />
                                    <textarea className='inputCyan mb-3' name='description' placeholder='Input News Description Here !' style={{width:'100%', height:'120px', borderRadius:'8px'}}></textarea>
                                </Col>
                                <Col className='px-0' xs={12} md={5}>
                                    <div class="input-group d-flex justify-content-end mb-3">
                                        <input type="file" class="form-control" id="inputGroupFile02" hidden />
                                        <label class="input-group-text inputCyan" for="inputGroupFile02" style={{width:'90%'}}>
                                            <img src={upload} alt='upload' style={{width:'100%'}} />
                                        </label>
                                    </div>
                                </Col>
                                <Button className='' style={{width:'100%'}}>Publish</Button>
                            </Row>
                        </Col>
                        <Col className='ps-4 px-0 ' xs={12} md={5}>
                            <div className='d-flex justify-content-center' style={{display:'flex', flexDirection:'column'}}>
                                <img src={preview} alt='' style={{width:'100%'}} />
                                <p className='d-flex justify-content-center'>No Images Uploaded</p>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    </div>
  )
}
