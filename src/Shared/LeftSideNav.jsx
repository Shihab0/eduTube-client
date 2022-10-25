import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className='mt-4'>
            <h3 className='text-center bg-dark p-2 text-white-50'>Select Your Subject</h3>
            {
              categories.map(category => <div key={category.id} className='mb-1'><ListGroup>
              <ListGroup.Item>
               <Link to={`/course/${category.id}`} >{category.name}</Link>
              </ListGroup.Item></ListGroup></div>)
            }
        </div>
    );
};

export default LeftSideNav;