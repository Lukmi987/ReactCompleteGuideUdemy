import React, {useEffect} from 'react';
import {useDispatch, useSelector } from "react-redux";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Counter from './app/counter/containers//Counter';
import UserForm from "./app/users/containers/UserForm";
import UserList from './app/users/containers/UserList';
import AuthForm from "./app/auth/containers/AuthForm";
import Locations from "./app/ybusLocations/containers/Locations";
import store from './configureStore';
import {logOut} from "./app/auth/actions";
import './App.css';

const App = () =>  {
  const dispatch = useDispatch();
  const logUserOut = () => dispatch(logOut());
  const test = () => console.log('click in app');

const idToken = useSelector(state => state.authentication.userAuthInfo.idToken);
    const tokenLocalStorage = localStorage.getItem('token')
  useEffect(()=>{
    console.log('hello from app in use effect',tokenLocalStorage);
  },[idToken,logUserOut])


    return(
        <div className="App">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    <Counter />
                </Tab>
                <Tab eventKey="profile" title="User Form">
                   <UserForm />
                </Tab>

                {idToken && <Tab eventKey="contact" title="User List" >
                                <UserList />
                            </Tab>
                }
                {!idToken ?
                    <Tab eventKey="authenticate" title="Authenticate" >
                    <AuthForm />
                    </Tab>
                    :
                    <Tab  eventKey="authenticate" title="Log Out" >
                      <button onClick={logUserOut}>LogOut</button>
                    </Tab>
                }
                <Tab eventKey="YbusLocations" title="Ybus Locations" >
                    <Locations />
                </Tab>
            </Tabs>
        </div>
  )
}
export default App;
