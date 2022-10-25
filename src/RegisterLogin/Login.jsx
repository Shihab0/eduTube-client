import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FcReading } from 'react-icons/fc';
import Header from '../Shared/Header';

const Login = () => {
    return (
        <div style={{background: '#ecf3fd', height: '100vh'}}>
            <Header></Header>
            <Form className='mx-auto mt-5' style={{width: '350px'}}>
            <h3 className='text-center mb-3 text-warning'><FcReading/> Login to Edu-Tube</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
               Login
            </Button>
        </Form>
        </div>
    );
};

export default Login;