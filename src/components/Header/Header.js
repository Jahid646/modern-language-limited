import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const styles = {

                fontWeight: "bold",
                color: "red"
                
    }
    return (
        <div>

            <Container fluid>
                <h1>Modern Language Limited</h1>

            
            <NavLink
                to="/home"
                activeStyle={styles} className="mystyle"
>
                Home
            </NavLink>

            <NavLink
                to="/allcourses"
                activeStyle={styles}
                className="mystyle"
>
                All Courses
            </NavLink>

            <NavLink
                to="/about"
                activeStyle={styles}
                className="mystyle"
>
                About Us
            </NavLink>

            <NavLink
                to="/contact"
                activeStyle={styles}
                className="mystyle"
>
                Contact Us
            </NavLink>
            </Container>
        </div>
    );
};

export default Header;