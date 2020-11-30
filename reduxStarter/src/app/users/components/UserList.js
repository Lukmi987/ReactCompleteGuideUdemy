import React, { useEffect, useState } from 'react';
import Table from  'react-bootstrap/Table';
import Button from  'react-bootstrap/Button';
import UserModal from "../../_common/modals/containers/UserModal";
import {setUserModalStatus} from "../../_common/modals/actions";

const UserList = ({userList, fetchUserList, removeUser, setUserModalStatus, setSelectedUser}) => {
 useEffect(() => {
    fetchUserList();
}, []);
// const [show, setShow] = useState(false);
//  const [firstName, setFirstName] = useState('');
//  //const [secondName, setSecondName] = useState('');


const handleEditUser = (user) => {
    setUserModalStatus(true);
    setSelectedUser(user);
}


 return (
     <>
        <UserModal />
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
                      <Button onClick={() => handleEditUser(user) } variant='warning'>Edit
                      </Button>
                    </td>
                    <td><Button onClick={() => {removeUser(user.id)}} variant='danger'>Delete</Button></td>
                </tr>
                )
            )}
            </tbody>
        </Table>
     </>

    )
 }

export default UserList;

// rendrovani user Listu pri zmene
//