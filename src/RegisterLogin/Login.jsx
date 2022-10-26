import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FcReading } from 'react-icons/fc';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';


const Login = () => {

    const { providerLogin, logIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,photoURL,email,password);
        // handleRegister(email,password);
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from,{replace: true});
            })
            .catch(err => {
                const errMsg = err.message;
                setError(errMsg)
                console.log(errMsg)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: errMsg,
                  })
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from,{replace: true});
            })
            .catch(err => console.error(err))
    }

    const handleGitLogin = () => {
        providerLogin(gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from,{replace: true});
            })
            .then(err => console.error(err))
    }


    return (
        <div style={{ background: '#ecf3fd', minHeight: '100vh' }}>
            <Header></Header>
            <Form onSubmit={handleSubmit} className='mx-auto mt-4' style={{ width: '350px' }}>
                <h3 className='text-center mb-3 text-warning'><FcReading /> Login to Edu-Tube</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <p><small>Already have an account? <Link to='/register'>Register here.</Link> </small></p>
                </Form.Group>
                <Button style={{ width: '100%' }} variant="primary" type="submit">
                    Login
                </Button> <br />
                <p className='text-center text-muted mb-0'>Or</p>
                <Button onClick={handleGoogleSignIn} variant="warning" size="md" style={{ width: '100%' }}>
                    <FaGoogle />  Login With Google
                </Button> <br />
                <p className='text-center text-muted mb-0'>Or</p>
                <Button onClick={handleGitLogin} variant="warning" size="md" style={{ width: '100%' }}>
                    <FaGithub />  Login With GitHub
                </Button> <br /><br />
            </Form>
            <Footer></Footer>
        </div>
    );
};

export default Login;