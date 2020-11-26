import React, { useEffect } from 'react';
import Table from  'react-bootstrap/Table';
import Button from  'react-bootstrap/Button';


const UserList = ({userList, fetchUserList}) => {
 useEffect(() => {
    fetchUserList();
}, []);

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
                    <td><Button variant='warning'>Edit</Button></td>
                    <td><Button variant='danger'>Delete</Button></td>
                </tr>
                )
            )}
            </tbody>
        </Table>
    )
 }
// pridat tlacitka edit(pop up) delete, modal a v modalu zobrazit ten radek
//onClick zobzit confirm a pak zavolat sagu smazat na v db(axios delete) a response data ulozim do storu
export default UserList;