import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Container, Form, } from 'react-bootstrap';




const Footer = () => {
    return (
        <>
            <Container fluid>

                <div className="bg-dark text-white mt-5 p-5">
                  {/* Subscribe form  */}
                <Form>
  <Form.Group className="mb-3">
    <Form.Label>Please Subscribe!!!</Form.Label>
    <Form.Control type="email" placeholder="Enter your email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Button variant="outline-danger">Subscribe</Button>{' '}

</Form>
<hr />
{/* Copyright  */}
<p>&copy; 2021-2022. All Rights Reserved.</p>
                </div>

            </Container>
        </>
    );
};

export default Footer;