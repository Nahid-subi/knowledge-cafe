import React, { useEffect, useState } from 'react';
import './Card.css'
import ShowCard from '../ShowCard/ShowCard';
const Card = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>
             {
                cards.map(card => <ShowCard
                key={card.id}
                card={card}
                ></ShowCard>)
             }

        </div>
    );
};

export default Card;