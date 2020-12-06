import React, { useEffect, useState } from 'react';
import Table from  'react-bootstrap/Table';
import Button from  'react-bootstrap/Button';
import UserModal from "../../_common/modals/containers/UserModal";

const UserList = ({userList, fetchUserList, removeUser, setUserModalStatus, setSelectedUser, userAuthInfo}) => {
 useEffect(() => {
   console.log('...........userID token authe', userAuthInfo.idToken);
   if(userAuthInfo.idToken) fetchUserList();
}, [userAuthInfo.idToken]);

 const [edited, setEdited] = useState(false);

 const handleEditUser = (user) => {
    setEdited(true);
    setUserModalStatus(true);
    setSelectedUser(user);
}

 return (
     <>
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
         { edited && <UserModal /> }
     </>

    )
 }

export default UserList;

// rendrovani user Listu pri zmene
//
