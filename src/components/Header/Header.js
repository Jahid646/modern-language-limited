import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    // active style of Navlink 
    const styles = {

                fontWeight: "bold",
                color: "red"
                
    }
    return (
        <div>

            <Container fluid>

                <div className="bg-dark text-white p-4">

                {/* Heading  */}
                <h1>Welcome To <br /> Modern Language<span className="text-danger"> Limited!!!</span> </h1>
            <hr />
            {/* NavLink  */}
            <NavLink
                to="/home"
                activeStyle={styles} className="mystyle"
>
                Home
            </NavLink>

            <NavLink
                to="/courses"
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
            </div>
            </Container>
        </div>
    );
};

export default Header;