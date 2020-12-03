import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Counter from './app/counter/containers//Counter';
import UserForm from "./app/users/containers/UserForm";
import UserList from './app/users/containers/UserList';
import AuthForm from "./app/auth/containers/AuthForm";
import Locations from "./app/ybusLocations/containers/Locations";
import './App.css';

const App = () =>  (
    <div className="App">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
                <Counter />
            </Tab>
            <Tab eventKey="profile" title="User Form">
                <UserForm />
            </Tab>
            <Tab eventKey="contact" title="User List" >
                <UserList />
            </Tab>
            <Tab eventKey="signUp" title="Sign Up" >
            <AuthForm />
            </Tab>
            <Tab eventKey="YbusLocations" title="Ybus Locations" >
                <Locations />
            </Tab>
        </Tabs>
    </div>
)

export default App;
