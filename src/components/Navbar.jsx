import React from 'react';
import Logo from '../img/logo.jpg';
import { SocialIcon } from 'react-social-icons';

function Navbar() {
    return (
        <div className="header">
            <img src={Logo} alt="this is my logo" className="logo" />
            <nav>
                <ul>
                    <li><a href='https://www.iancahn.com'>Home</a></li>
                    <li><a href='https://www.iancahn.com'>About Me</a></li>
                    <SocialIcon url="https://linkedin.com/in/iancahn" bgColor="#dbdbdb84" fgColor="#fff" className="social-icons" />
                    <SocialIcon url="https://www.instagram.com/apple/" bgColor="#dbdbdb84" fgColor="#fff" className="social-icons" />
                    <SocialIcon url="https://twitter.com/joerogan/" bgColor="#dbdbdb84" fgColor="#fff" className="social-icons" />
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
