import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import userPhoto from '../assest/img/user-512.webp';
import { FcReading } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Image from 'react-bootstrap/Image'

const Header = () => {
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
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link className='text-decoration-none' to='/register'>Register</Link>
                        </Nav.Link>
                        <Nav.Link>
                            {
                                user?.uid ? <><Link className='text-decoration-none' to='/login'>Logout</Link></>
                                : <><Link className='text-decoration-none' to='/login'>Login</Link></>
                            }
                        </Nav.Link>
                        <Nav.Link>
                            <p>{user?.displayName}</p>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none' to='/login'>
                                {user?.photoURL ? <><Image style={{ width: '25px' }} roundedCircle src={user?.photoURL} alt="" /></> : <><Image style={{ width: '25px' }} roundedCircle={true} src={userPhoto} alt="" /></>}
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;