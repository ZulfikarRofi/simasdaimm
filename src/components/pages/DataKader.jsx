import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import NavbarUser from '../navbar/NavbarUser';
import { useState } from 'react';
import SelectedModal from '../modals/SelectedModal';    

export default function DataKader() {
    const [modalShow, setModalShow] = useState(false);

    let handleShow = () => setModalShow(true);
    let handleClose = () => setModalShow(false);

  return (
    <div>
        <NavbarUser />
        <Container className='my-5 pt-5'>
            <div className='d-flex justify-content-between'>
                <h1 className='my-3'>Data Kader</h1>
                <div className='mt-3'>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search"  aria-label="Search" />
                        <Button class="btn btn-outline-secondary" type="submit">Search</Button>
                    </form>
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>FullName</th>
                        <th>Foto</th>
                        <th>Komisariat</th>
                        <th>Jurusan</th>
                        <th>Angkatan</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <SelectedModal Close={handleClose} show={modalShow} />
                    <tr>
                        <td>1</td>
                        <td onClick={() => handleShow()}>Budi Hariono</td>
                        <td className='d-flex justify-content-center'><img src='' alt='preview' style={{width:'200px'}}/></td>
                        <td>Elmacife</td>
                        <td>Teknik Mesin</td>
                        <td>2020</td>
                        <td>Mahasiswa Aktif</td>
                        <td>
                            <div className='px-5 d-flex justify-content-between'>
                                <Button className='btn-secondary' style={{width:'100%'}}>Edit</Button>
                                <Button className='btn-danger ms-3' style={{width:'100%'}} >Delete</Button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    </div>
  )
}
