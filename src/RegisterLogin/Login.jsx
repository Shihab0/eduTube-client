import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FcReading } from 'react-icons/fc';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';


const Login = () => {
    return (
        <div style={{ background: '#ecf3fd', minHeight: '100vh' }}>
            <Header></Header>
            <Form className='mx-auto mt-5' style={{ width: '350px' }}>
                <h3 className='text-center mb-3 text-warning'><FcReading /> Login to Edu-Tube</h3>
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
                <Button style={{ width: '100%' }} variant="primary" type="submit">
                    Login
                </Button> <br />
                <p className='text-center text-muted mb-0'>Or</p>
                <Button variant="warning" size="md" style={{ width: '100%' }}>
                    <FaGoogle />  Login With Google
                </Button> <br />
                <p className='text-center text-muted mb-0'>Or</p>
                <Button variant="warning" size="md" style={{ width: '100%' }}>
                    <FaGithub />  Login With GitHub
                </Button> <br /><br />
            </Form>
            <Footer></Footer>
        </div>
    );
};

export default Login;