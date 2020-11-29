import React, { useEffect, useState } from 'react';
import Table from  'react-bootstrap/Table';
import Button from  'react-bootstrap/Button';
import Modal from  'react-bootstrap/Modal';
//import UserModal from '../../UI/UserModal'


const UserList = ({userList, fetchUserList,removeUser,editUser}) => {
 useEffect(() => {
    fetchUserList();
}, []);
const [show, setShow] = useState(false);
 const [firstName, setFirstName] = useState('');
 //const [secondName, setSecondName] = useState('');
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const handleChange = (e,name) => {

  setFirstName(e.target.value);
  //not set immediately
  console.log(name);
}


 return (

        <Table striped bordered hover>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            </thead>
            <tbody>
            {userList.map(user => (
                <tr key={user.id}>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>
                      <Button onClick={()=> handleShow()} variant='warning'>Edit

                      </Button>
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
                    </td>
                    <td><Button onClick={() => {removeUser(user.id)}} variant='danger'>Delete</Button></td>
                </tr>
                )
            )}
            </tbody>
        </Table>
    )
 }

export default UserList;
