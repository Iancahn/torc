import React from 'react';
//import components
import Card from './Card';

function Cards() {
    return (
        <div>
            <section id="cards-section">
                <Card />
                <Card />
                <Card />
                <Card />
                <div id="showMoreArticles">
                    <button>Show More Articles</button>
                </div>
            </section>
        </div>
    )
}

export default Cards;
