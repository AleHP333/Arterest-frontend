// React utilities
import React from "react";
import { Link } from "react-router-dom";
// // Files and extra code
import logo from '../Assets/logoArterest2.png';

// Styles
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

export default function Footer() {

    return (
        <Navbar className="footer" bg="dark" variant="dark">
            <Navbar.Brand className="contact">
                <img
                    alt="Arterest"
                    src={logo}
                    width="60"
                    height="60"
                />
                <h1 className= 'title' >Arterest</h1>
            </Navbar.Brand>
            <Navbar.Text className="terms">
            <Link to='/terms'><div className="footerContact">© Arterest, 2022. All rights reserved.</div></Link>
            </Navbar.Text>
            <div className="contact">
                <Navbar.Text>
                    <Link to='/about'><div className="footerContact">About Us</div></Link>
                </Navbar.Text>
                <Navbar.Text>
                    <Link to='/contact'><div className="footerContact">Contact us</div></Link>
                </Navbar.Text>
                <Navbar.Text>
                    <Link to='/faq'><div className="footerContact">FAQ</div></Link>
                </Navbar.Text>
            </div> 
        </Navbar>
    );
}