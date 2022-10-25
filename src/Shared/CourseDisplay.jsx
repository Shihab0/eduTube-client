import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const CourseDisplay = ({ courseDisplay }) => {
    const { subject, teacher_name, picture, description } = courseDisplay;
    return (
        <div className='mt-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{height: '170px'}} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='mb-0'>{subject}</Card.Title>
                    <p className='text-muted'><small>Teacher Name: {teacher_name}</small></p>
                    <Card.Text>
                       {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDisplay;