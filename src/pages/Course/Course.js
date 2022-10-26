import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDisplay from '../../Shared/CourseDisplay';

const Course = () => {
    const course = useLoaderData();
    console.log(course)
    return (
        <div className='d-flex flex-column align-items-center flex-md-row gap-3 justify-content-center flex-md-wrap'>
            {
                course.map(c => <CourseDisplay
                    key={course._id}
                    courseDisplay = {c}
                ></CourseDisplay>)
            }
        </div>
    );
};

export default Course;