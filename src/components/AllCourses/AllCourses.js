import React, { useEffect, useState } from 'react';
import {Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('allData.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);
    return (
        <div>
            <h2 className="p-3">Our All <span className="text-danger">Courses</span></h2>
            <Container>
                <Row>
                    
                         {
                             courses.map(course => <Course
                             course ={course}
                             key={course.key}
                         ></Course>)
                        }
                   
                    
                   
                    
                </Row>
            </Container>

        </div>
    );
};

export default AllCourses;