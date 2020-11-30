import React, { useEffect, useState } from 'react';
import Button from  'react-bootstrap/Button';
import Modal from  'react-bootstrap/Modal';
import {setUserModalStatus} from "../actions";

const UserModal = ({ status, setUserModalStatus }) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input defaultValue={user.fname} onChange={ (e) => {handleChange(e,user.fname)}}/>
                <input defaultValue={user.lname} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button onClick={() => editUser(user.id,user.fname,user.lname)}variant="primary">Confirm</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default UserModal;
