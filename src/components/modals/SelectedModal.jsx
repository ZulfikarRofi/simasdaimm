import React from 'react'
import { Modal, ModalBody } from 'react-bootstrap'
import preview from '../assets/images/MUH SASMITO ADI WIBOWO.JPG'

export default function SelectedModal({Close, show}) {
  return (
    <Modal
    size='sm'
    aria-labelledby='contained-modal-title-vcenter'
    centered
    show={show}
    onHide={Close}
    >
    <ModalBody>
        <div className='d-flex justify-content-center'>
            <img className='profile-shape' src={preview} alt='preview' style={{width:'100px', borderRadius:'50px'}} />
        </div>
        <div className='d-flex mt-3' style={{flexDirection:'column', alignItems:'center'}}>
            <p className='fs-5 fw-bold m-0'>Budi Hariono</p>
            <p className='fw-semibold m-0'>Elmacife - Teknik Mesin</p>
            <p className='muted-text' style={{fontSize:'14px'}}>Kader</p>
            <div className='d-flex lightBorderTop'>
                <p className='py-1 px-2 m-0' style={{borderRadius:'15px',fontSize:'12px'}}>Jl.Sumatera IV</p>
                <p className='py-1 px-2 m-0' style={{borderRadius:'15px',fontSize:'12px'}}>0813-2248-0102</p>
            </div>
            <div className='d-flex m-0'>
                <p className='py-1 px-2' style={{borderRadius:'15px',fontSize:'12px'}}>budihariono@mail.com</p>
                <p className='py-1 px-2' style={{borderRadius:'15px',fontSize:'12px'}}>Mahasiswa Aktif</p>
            </div>
        </div>
    </ModalBody>
    </Modal>
  )
}
