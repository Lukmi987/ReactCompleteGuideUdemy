import React, {useCallback, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserForm = ({ processUserForm }) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [validated, setValidated] = useState(false);

    const handleInputChange = (e) =>{
        const id = e.target.id;
        const value = e.target.value;

        if(id === 'fname') setFname(value);
        if(id === 'lname') setLname(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const form = e.currentTarget;
            if (form.checkValidity() === false){
                console.log('v ifu');
                setValidated(true);
                return;
            }
        //form has been validated
        setValidated(true);
        processUserForm(composeFormData());
    }

    const composeFormData = () => ({
        fname,
        lname,
    });

    return (
        <Form
            noValidate
            validated= {validated}
            onSubmit={handleSubmit}
            >

            <Form.Group controlId="fname">
                <Form.Label>First name:</Form.Label>
                <Form.Control required  onChange={handleInputChange} value={fname}  type="text" placeholder="first name" />
            </Form.Group>

            <Form.Group controlId="lname">
                <Form.Label>Last Name: </Form.Label>
                <Form.Control required onChange={handleInputChange} value={lname} type="text" placeholder="Last Name" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {`${fname} ${lname}`}<br/>
        </Form>
    )
}

export default UserForm;