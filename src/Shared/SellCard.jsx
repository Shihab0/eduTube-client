import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdSell } from 'react-icons/md';
import { GiClick, GiTeacher } from 'react-icons/gi';
import { useLoaderData } from 'react-router-dom';
import { FaBook, FaUserGraduate } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const SellCard = () => {
    const handleAdmit = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Congratulation, You are admitted.',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const { subject, price, teacher_name, picture, sell, description } = useLoaderData();
    return (
        <div className='d-flex justify-content-center mt-4'>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='text-center text-danger'><span className='fw-bold'><MdSell /> Price:</span> ${price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><span className='fw-bold'><FaBook /> Subject:</span> {subject} </ListGroup.Item>

                    <ListGroup.Item><span className='fw-bold'><GiTeacher /> Teacher:</span> {teacher_name} </ListGroup.Item>

                    <ListGroup.Item><span className='fw-bold'><FaUserGraduate /> Admitted:</span> {sell} </ListGroup.Item>

                </ListGroup>
                <Card.Body>
                    <Button onClick={handleAdmit} variant="warning" size="md" style={{ width: '100%' }}>
                        <GiClick/> Admit Now
                    </Button> <br /><br />
                </Card.Body>
            </Card>
        </div>
    );
};

export default SellCard;