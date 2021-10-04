import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { Form, Button, Container,Row, Col } from 'react-bootstrap';


const ContactUs = () => {
    return (
        <>
            <h1>Contact <span className="text-danger">Us</span> </h1>


            <Container>
                <Row className="p-5 border">
                    <Col>
                    <div>
                    <i class="far fa-envelope"></i>
                    <h5>Mail</h5>
                    </div>
                    </Col>
                    <Col>
                    <div>
                    <i class="fas fa-phone-volume"></i>
                    <h5>Call</h5>
                    </div>
                    </Col>
                    <Col>
                    <div>
                    <i class="fab fa-twitter"></i>
                    <h5>Follow</h5>
                    </div>
                    </Col>
                    <Col>
                    <div>
                    <i class="fab fa-youtube"></i>
                    <h5>Subscribe</h5>
                    </div>
                    </Col>
                </Row>
            </Container>
            <br />
                      
                   
           
                 <Container>
                 <div className="border p-2"> 
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Explain please,,,we are hearing,,</Form.Label>
                    <Form.Control as="textarea" rows={3} /> <br/>
                    <Button variant="outline-danger">Submit</Button>{' '}

                    </Form.Group>
                 </Form>
                 </div>
            </Container>

            
            

        </>
    );
};

export default ContactUs;