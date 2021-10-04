import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);
    return (
        <div>
            <h2>allll crsksdhh</h2>
            {
                courses.map( course => <Course
                course ={course}
                key={course.key}
                ></Course>)
            }
        </div>
    );
};

export default AllCourses;