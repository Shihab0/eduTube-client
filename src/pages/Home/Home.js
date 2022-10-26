import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDisplay from '../../Shared/CourseDisplay';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div className='d-flex flex-column align-items-center flex-md-row gap-3 justify-content-center flex-md-wrap'>
            {
                 allCourse.map(c => <CourseDisplay
                    key={allCourse._id}
                    courseDisplay = {c}
                ></CourseDisplay>)
            }
        </div>
    );
};

export default Home;