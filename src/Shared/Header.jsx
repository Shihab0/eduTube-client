import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import userPhoto from '../assest/img/user-512.webp';
import { FcReading } from "react-icons/fc";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';

const Header = () => {
    const [nightMode, setNightMode] = useState(false);

    const { logOut } = useContext(AuthContext);

    const modeChange = () => {
        setNightMode(!nightMode);
    }

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.error(err))
    }

    const { user } = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><span className='fs-4 text-warning'><FcReading /> Edu-Tube </span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link className='text-decoration-none' to='/home'>Home</Link></Nav.Link>
                        <Nav.Link><Link className='text-decoration-none' to='/allCourse'>Course</Link></Nav.Link>
                        <Nav.Link><Link className='text-decoration-none' to='/blogs'>Blogs</Link></Nav.Link>
                        <Nav.Link><Link className='text-decoration-none' to='faq'>FAQ</Link></Nav.Link>
                        {
                            nightMode ? <Nav.Link><Link onClick={modeChange} className='text-decoration-none text-white'><BsSun></BsSun> </Link></Nav.Link> : <Nav.Link><Link onClick={modeChange} className='text-decoration-none text-white'><BsMoonFill /> </Link></Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            {
                                user?.uid ? <></> : <><Link className='text-decoration-none' to='/register'>Register</Link></>
                            }
                        </Nav.Link>
                        <Nav.Link>
                            {
                                user?.uid ? <><Link onClick={handleLogOut} className='text-decoration-none' to='/login'>Logout</Link></>
                                    : <><Link className='text-decoration-none' to='/login'>Login</Link></>
                            }
                        </Nav.Link>
                        <Nav.Link>
                            <p>{user?.displayName}</p>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none' to='/login'>
                                {user?.photoURL ? <><Image title={user.displayName} style={{ width: '25px' }} roundedCircle src={user?.photoURL} alt="" /></> : <><Image style={{ width: '25px' }} roundedCircle={true} src={userPhoto} alt="" /></>}
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;