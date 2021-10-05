
import { Card, Button } from 'react-bootstrap';


const PopularCourses = (props) => {
    const {name, price, duration, img} = props.course;
    return (
        <div className="col-5 mx-auto g-3">
          <div className="border border-rounded border-danger shadow">
            <Card className="h-100">
        <Card.Img variant="top" src={img} className="rounded" height="400px"/>
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

export default PopularCourses;