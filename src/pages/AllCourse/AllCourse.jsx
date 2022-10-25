import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCourse = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h2>All Course {allCourse.length}</h2>
        </div>
    );
};

export default AllCourse;