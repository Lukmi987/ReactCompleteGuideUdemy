import React, { useEffect, useState } from 'react';
import Button from  'react-bootstrap/Button';
import Modal from  'react-bootstrap/Modal';
import {setUserModalStatus} from "../actions";

const UserModal = ({ status, setUserModalStatus, selectedUser, editUser }) => {
  const [disabled, setDisabled] = useState("disabled");
  // useState is not rerendr. , calls all except useState
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');

  useEffect(()=>{
     if(selectedUser){
         setfname(selectedUser.fname);
         setlname(selectedUser.lname);
     }
  } ,[selectedUser])

  const handleChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    const oldValue = selectedUser[id];

    (id === 'fname') ? setfname(value) : setlname(value)
    setDisabled(oldValue !== value ? null : "disabled");
  }

  const handleSubmit = () => {
    const userId = selectedUser.id;
      if(selectedUser.fname !== fname || selectedUser.lname !== lname){
          const editedUser = {id: selectedUser.id, fname, lname};
          editUser(editedUser);
      }
  }
  return (
      selectedUser && (
      <Modal
          show={status}
          onHide={() => setUserModalStatus(false)}
          backdrop="static"
          keyboard={false}
      >
          <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input defaultValue={selectedUser.fname}
                     id='fname'
                     onChange={handleChange} />
              <input defaultValue={selectedUser.lname}
                     id='lname'
                     onChange={handleChange} />
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={() => setUserModalStatus(false)}>
                  Close
              </Button>
              <Button variant="primary"
                      disabled={disabled}
                      onClick={handleSubmit}>Confirm</Button>
          </Modal.Footer>
      </Modal> )
  )
};

export default UserModal;
