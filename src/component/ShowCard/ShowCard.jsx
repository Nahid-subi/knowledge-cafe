import React from 'react';
import './ShowCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const ShowCard = (props) => {
    const { authorName, authorImg, blogTitle, blogImg, readTime } = props.card;
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
                <p className='book-mark'>{readTime} min read <FontAwesomeIcon icon={faBookmark} /></p>

            </div>
            <h1>{blogTitle}</h1>
            <p className='p'>Mark as read</p>
            <div className='hr'></div>
        </div>
    );
};

export default ShowCard;