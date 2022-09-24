import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import NavbarUser from '../navbar/NavbarUser';
import preview from '../assets/images/masta-2021.jpg';

export default function ContentList() {
  return (
    <div>
        <NavbarUser />
        <Container className='my-5 pt-5'>
            <h4 className='mb-4'>List Content, News, and Event</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Image</th>
                        <th>Publisher</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Masa taaruf IMM Unesa 2021</td>
                        <td>Content</td>
                        <td className='d-flex justify-content-center'><img src={preview} alt='preview' style={{width:'200px'}}/></td>
                        <td>Admin</td>
                        <td>
                            <div className='px-5 d-flex justify-content-between'>
                                <Button className='btn-secondary' style={{width:'100%'}}>Edit</Button>
                                <Button className='btn-danger ms-3' style={{width:'100%'}}>Delete</Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Masa taaruf IMM Unesa 2021</td>
                        <td>Content</td>
                        <td className='d-flex justify-content-center'><img src={preview} alt='preview' style={{width:'200px'}}/></td>
                        <td>Admin</td>
                        <td>
                            <div className='px-5 d-flex justify-content-between'>
                                <Button className='btn-secondary' style={{width:'100%'}}>Edit</Button>
                                <Button className='btn-danger ms-3' style={{width:'100%'}}>Delete</Button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    </div>
  )
}
