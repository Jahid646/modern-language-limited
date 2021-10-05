import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { Form, Button, Container,Row, Col } from 'react-bootstrap';


const ContactUs = () => {
    return (
        <>
            <h1>Contact <span className="text-danger">Us</span> </h1>


            <Container>
                <Row className="p-5">
                    <Col>
                    <div className="m-2 p-3 border border-danger shadow">
                    <h5>Mail</h5>
                    <i className="far fa-envelope text-primary"></i>
                    <h6>mlanguageltd7@gmail.com</h6>
                    </div>
                    </Col>
                    <Col>
                    <div className="m-2 p-3 border border-danger shadow">
                    <h5>Call</h5>
                    <i className="fas fa-phone-volume text-success"></i>
                    <h6>+1234567890.</h6>
                    </div>
                    </Col>
                    <Col>
                    <div className="m-2 p-3 border border-danger shadow">
                    <h5>Follow</h5>
                    <i className="fab fa-twitter text-info"></i>
                    <h6>modernLangLtd7.</h6>
                    </div>
                    </Col>
                    <Col>
                    <div className="m-2 p-3 border border-danger shadow">
                    <h5>Subscribe</h5>
                    <i className="fab fa-youtube text-danger"></i>
                    <h6>Modern Language Ltd.</h6>
                    </div>
                    </Col>
                </Row>
            </Container>
            <br />
                      
                   
           
                 <Container>
                 <div className="border p-2 shadow-lg"> 
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Your Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Explain please..We are hearing...</Form.Label>
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