import React from 'react';
import Logo from '../img/logo.jpg'

function Navbar() {
    return (
        <div>
            <nav>
                <div className="Nav-left">
                    <img src={Logo} alt="this is my logo" className="logo" />
                    <p>Your Logo</p>
                </div>
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
