import React from 'react';
import Logo from '../img/logo.jpg'

function Navbar() {
    return (
        <div className="header">
            <img src={Logo} alt="this is my logo" className="logo" />
            <nav>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Me</a></li>
                    <div className="social-button">LinkedIn</div>
                    <div className="social-button">Instagram</div>
                    <div className="social-button">Twitter</div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
