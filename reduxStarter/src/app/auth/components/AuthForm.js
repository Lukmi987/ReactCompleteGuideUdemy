import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AuthForm = ({ processLoginForm,  logOut }) => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [validated, setValidated] = useState(false);
    const [isSignup, setIsSignup] = useState(true);

    // console.log('.........',expiresToken);
    // useEffect((expiration)=> {
    //     console.log('......... v useeffect');
    //         setTimeout(() => {
    //            // logOut
    //         }, expiration * 1000);
    // },[expiresToken]);

    // checkAuthTimeout = (expirationTime) => () => {
    //     setTimeout(() => {
    //         //after expiration i call log out action logout()
    //     }, expirationTime * 1000);
    // }
    //
    // export const logout = () {
    //     //call authLogout()
    //     //where i updateObject (state, {token: null, userId: null})
    // }

    const handleInputChange = (e) =>{
        const id = e.target.id;
        const value = e.target.value;
        if(id === 'email') setEmail(value);
        if(id === 'pwd') setPwd(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const form = e.currentTarget;
            if (form.checkValidity() === false){
                setValidated(true);
                return;
            }
        //form has been validated
        setValidated(true);
        processLoginForm(composeFormData());
    }

    const composeFormData = () => ({
        email,
        pwd,
        isSignup,
    });

    const switchAuthModeHandler = () => isSignup ? setIsSignup(false) : setIsSignup(true);


    return (
      <>
        <Form
            noValidate
            validated= {validated}
            onSubmit={handleSubmit}
            >
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleInputChange} value={email} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="pwd">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleInputChange} value={pwd} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <br/>
        </Form>
        <Button onClick={switchAuthModeHandler}
                variant='danger'>
            Switch to {isSignup ? 'SIGNIN' : 'SIGNUP'}
        </Button>
          <div>
          <Button onClick={logOut} variant="primary" >
           LogOut
          </Button>
          </div>
        </>
    )
}

export default AuthForm;
