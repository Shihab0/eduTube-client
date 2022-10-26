import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import notFound from '../../assest/img/errorPage.webp'

const Route404 = () => {
    return (
        <div>
            <Card className='bg-white'>
                <Card.Img style={{height: '100vh'}} src={notFound} alt="Card image" />
                <Card.ImgOverlay>
                   <h1 className='position-absolute bottom-0 start-50 translate-middle-x'><Link className='text-danger' to='/home'>  Go to Home </Link></h1>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Route404;