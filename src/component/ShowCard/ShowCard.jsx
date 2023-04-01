import React from 'react';
import './ShowCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const ShowCard = (props) => {
    const { authorName, authorImg, blogTitle, blogImg, readTime } = props.card;
    const handlerCardToAdd = (card) => {
      const existingCards = JSON.parse(localStorage.getItem('savedCards')) || [];
      const isCardExists = existingCards.some(
        (existingCard) => existingCard.blogTitle === card.blogTitle
      );
      if (!isCardExists) {
        localStorage.setItem(
          'savedCards',
          JSON.stringify([...existingCards, card])
        );
      }
    };
    const handlerTimeAdd = (card) =>{
      const existingReadTimes = JSON.parse(localStorage.getItem('readTimes')) || {};
      existingReadTimes[card.blogTitle] = card.readTime;
      localStorage.setItem('readTimes', JSON.stringify(existingReadTimes));
    }
    
    
    return (
        <div className='card-style'>
            <img className='img' src={blogImg} alt="" />
            <div className='author'>
                <div className='author-info'>
                    <img src={authorImg} alt="" />
                    <div>
                        <h5>{authorName}</h5>
                        <p>Mar 14 (4 Days ago)</p>
                    </div>
                </div>
                <p className='book-mark'>{readTime} min read <FontAwesomeIcon onClick={() => handlerCardToAdd(props.card)}  icon={faBookmark} /></p>

            </div>
            <h1>{blogTitle}</h1>
            <p className='p' onClick={() => handlerTimeAdd(props.card)}>Mark as read</p>
            <div className='hr'></div>
        </div>
    );
};

export default ShowCard;