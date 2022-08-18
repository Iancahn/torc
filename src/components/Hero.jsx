import React from 'react';
import heroImage from '../img/hero-image.png';
import heroArrow from '../img/hero-arrow.png';

function Header() {
    return (
        <div>
            <section id="hero-section">
                <div className="row">
                    <div className="column">
                        <h1>Hello Torc, <br />I am Ian.</h1>
                        <hr className="hr1" />
                        <p className="hero-text">“I love to share knowledge and am currently writing a book on how to start a digital business and create a very powerful team.”</p>
                    </div>
                    <div className="column">
                        <img src={heroImage} alt=" the circle, squares, triangle and much more" id="hero-image" />
                    </div>
                </div>
                <div className="scrollToRead">
                    <p>Scroll to read my articles</p>
                </div>
                <div className="scrollArrow">
                    <img src={heroArrow} alt="an arrow pointing towards articles" id="scrollArrow" />
                </div>
            </section >
        </div >
    )
}

export default Header;