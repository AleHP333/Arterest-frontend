// React utilities
import React from "react";
import { Link } from "react-router-dom";
// // Files and extra code
import logo from '../Assets/logoArterest.png';
import Arterest from '../Assets/ArterestRed.png';

// Styles
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

export default function Footer() {

    return (
        <Navbar className="p-16" >
            <Navbar.Brand className="p-8 bg-transparent shadow hover:shadow-lg mt-24" >
                <div className="grid ">
                    <div className="grid text-center order-last md:order-first mt-20 md:mt-0">
                        <img
                            src={Arterest}
                            className="w-48 h-18 mx-auto shadow-2xl relative inset-x-0 top-0 rounded flex items-center justify-center pb-3"
                            alt="Arterest"
                             />
                    </div>
                </div>
            </Navbar.Brand>

            <Navbar.Text className="grid  md:grid-cols-1">
                <Link to='/terms'><div className="grid pb-4 pt-0
                text-center order-last md:order-first mt-10 md:mt-0">© Arterest, 2022. All rights reserved.</div></Link>
            </Navbar.Text>

            <div className="grid md:grid-cols-3">
                <Navbar.Text>
                    <Link to='/about'><div className="grid  text-center  md:order-first mt-10 md:mt-0 font-bold">About Us</div></Link>
                </Navbar.Text>
                <Navbar.Text>
                    <Link to='/contact'><div className="grid  text-center  md:order-first mt-10 md:mt-0 font-bold">Contact us</div></Link>
                </Navbar.Text>
                <Navbar.Text>
                    <Link to='/faq'><div className="grid  text-center  md:order-first mt-10 md:mt-0 font-bold">FAQ</div></Link>
                </Navbar.Text>
            </div>

        </Navbar >
    );
}