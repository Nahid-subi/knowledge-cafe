import React from 'react';
import './ShowCard.css'
const ShowCard = (props) => {
    const {authorName} = props.card;
    return (
        <div>
            <h1>dsfs {authorName}</h1>
        </div>
    );
};

export default ShowCard;