import React from 'react';
import cardImage from '../img/card-image.jpg';

function Card() {

    return (
        <div className="row" id="cards-row">
            <div className="column">
                <img src={cardImage} alt="Displaying tourism in Africa" className='cardImage' />
            </div>
            <div className="column">
                <div className="card-date">
                    <p>Jan 24, 2022 | by David Andrea</p>
                </div>
                <h3 className="card-header">The basis of making the correct system design and according to needs.</h3>
                <div className="card-text">Here's to the crazy ones. The misfits, the rebels, the troublemakers, the round pegs in the square holes, the ones who see things differently.</div>
                <div className="card-button">Read More</div>
            </div>
        </div>
    )
}

export default Card;
