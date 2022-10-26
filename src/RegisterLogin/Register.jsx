import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FcReading } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Register = () => {

    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err))
    }

    return (
        <div style={{ background: '#ecf3fd', minHeight: '100vh' }}>
            <Header></Header>
            <Form className='mx-auto mt-4' style={{ width: '350px' }}>
                <h3 className='text-center mb-3 text-warning'><FcReading /> Register to Edu-Tube</h3>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder="Photo url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <p><small>Already have an account? <Link to='/Login'>Login here.</Link> </small></p>
                </Form.Group>
                <Button style={{ width: '100%' }} variant="primary" type="submit">
                    Register
                </Button> <br />
                <p className='text-center text-muted mb-0'>Or</p>
                <Button onClick={handleGoogleSignIn} variant="warning" size="md" style={{ width: '100%' }}>
                    <FaGoogle />  Register With Google
                </Button> <br />
                <p className='text-center text-muted mb-0'>Or</p>
                <Button variant="warning" size="md" style={{ width: '100%' }}>
                    <FaGithub /> Register With GitHub
                </Button> <br /><br />
            </Form>
            <Footer></Footer>
        </div>
    );
};

export default Register;