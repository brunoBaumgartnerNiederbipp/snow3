import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom";


function Contact(){
    return(
        <>
        <div className="flex">
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/service">Service</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>


            </nav>
            </div>
        
        
        
        </>


    );
}

export default Contact;