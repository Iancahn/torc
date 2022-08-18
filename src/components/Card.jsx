import React from 'react';
import cardImage from '../img/card-image.jpg';

function Card() {

    return (
        <div className="row" id="card-row">
            <div className="card">
                <img src={cardImage} alt="Displaying tourism in Africa" className='cardImage' />
                <div className="card-details">
                    <div className="card-date">
                        <p>Jan 24, 2022 | by David Andrea</p>
                    </div>
                    <h3 className="card-header">The basis of making the correct system design and according to needs.</h3>
                    <div className="card-text">Here's to the crazy ones. The misfits, the rebels, the troublemakers, the round pegs in the square holes, the ones who see things differently.</div>
                    <button className="card-button">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Card;
