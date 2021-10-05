import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PopularCourses from '../PopularCourses/PopularCourses';

const Home = (props) => {
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('popularData.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);
    return (
        <div>
            <h2 className="p-3">Our Popular <span className="text-danger">Courses</span></h2>
            <Container>
                <Row>
                    
                         {
                             courses.map(course => <PopularCourses
                             
                             course ={course}
                             key={course.key}
                             ></PopularCourses>)
                             }
                    
                    
                   
                    
                </Row>
            </Container>

        </div>
    );
};

export default Home;