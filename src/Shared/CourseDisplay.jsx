import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBook, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';



const CourseDisplay = ({ courseDisplay }) => {
    const { subject, teacher_name, picture, description, sell } = courseDisplay;
    return (
        <div className='mt-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{height: '170px'}} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='mb-0'><FaBook></FaBook> {subject}</Card.Title>
                   <p className='text-muted mb-0'><small><FaChalkboardTeacher></FaChalkboardTeacher> Teacher Name:  {teacher_name}</small></p>
                    <Card.Text className='mb-1'>
                       {description}
                    </Card.Text>
                    <small className='text-info'><i><FaUserGraduate />Total Student: {sell}</i></small>
                    <Button className='mt-2 mx-5' variant="primary">Buy This Course</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDisplay;