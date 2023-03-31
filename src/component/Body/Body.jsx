import React from 'react';
import Card from '../Card/Card';
import './Body.css'
import BookMark from '../BookMark/BookMark';
const Body = () => {
    return (
        <div className='body'>
            <div className='card'>
                <Card></Card>
            </div>
            <div className='side-bar'>
                <BookMark></BookMark>
            </div>
        </div>
    );
};

export default Body;