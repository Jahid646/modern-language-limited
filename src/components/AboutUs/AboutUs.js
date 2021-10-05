import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div>
            {/* Header part of  bout */}
                <div className="about-header p-3 m-5 shadow">
                <small>Our Vision</small>
            <h3>We envision a world where anyone, anywhere has the power to transform their life through learning.</h3>
            </div>
            

            
        {/* Middle part of about  */}
            <Container>
                <Row>
                    <Col>
                        <p className="mt-5 pt-5">Coursera partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide. We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.</p>
                    </Col>
                        
                    <Col>
                        <img className="border shadow mb-2" src="https://images.ctfassets.net/00atxywtfxvd/4vOWgNjy4KExR8msqHnJEP/bb1557d60e8a29f6a5f09148f700bff5/partner-logos.png" alt="" />
                    </Col>
                </Row>
            </Container>
            
            <Container fluid>
            <div className="about-header p-3 shadow">
                <h3>We believe</h3>
                <p>
                Learning is the source of human progress. <br />

It has the power to transform our world 
from illness to health,
from poverty to prosperity,
from conflict to peace. <br />

It has the power to transform our lives
for ourselves,
for our families,
for our communities. <br />

No matter who we are or where we are,
learning empowers us to change and grow
and redefine what’s possible. <br />
That’s why access to the best learning is a right, not a privilege.

And that’s why Coursera is here. <br />
We partner with the best institutions
to bring the best learning
to every corner of the world. <br />

So that anyone, anywhere has the power to
transform their life through learning.
                </p>
            </div>
            </Container>
        </div>
    );
};

export default AboutUs;