import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import './Course.css'


const Course = (props) => {
    const {name, price, duration, img} = props.course;
    return (
      
        <div className=" col-4 mx-auto g-3">
          <div className="card-container border border-danger shadow-lg">
            {/* Course card  */}
            <Card className="h-100">
              <Card.Img variant="top" src={img}  height="350px"/>
              <Card.Body>
              <Card.Title>Learn {name}</Card.Title>
              <Card.Text>
                  Course Fee: ${price}
              </Card.Text>
              <Card.Text>
                  Course Duration: {duration}
              </Card.Text>
              </Card.Body>
              <Button className="rounded" variant="outline-danger">Enroll Now</Button>{' '}


            </Card>

          </div>
             
        </div>
        
    );
};

export default Course;