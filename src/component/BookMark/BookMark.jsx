import React, { useEffect, useState } from 'react';
import './BookMark.css';

const BookMark = () => {
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('savedCards')) || [];
    const savedTitles = savedCards.map((card) => card.blogTitle);
    setBookmarkedBlogs(savedTitles);

  
  }, [bookmarkedBlogs.length]);

  const handleReload = () => {
    location.reload();
  }

  return (
    <div>
      <h3 className='time-read'>Spent time on read : {totalTime} seconds</h3>
      {bookmarkedBlogs.length > 0 ? (
        <div className='book-mark-add'>
          <h3 className='mark-count'>Bookmarked Blogs : </h3>
          <ul>
            {bookmarkedBlogs.map((title, index) => (
              <li key={index} className='mark-title'>{title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No bookmarked blogs</p>
      )}
      <div className='btn-show'>
        <button className='show-btn' onClick={handleReload}>Click Here to Show Bookmark</button>
      </div>
    </div>
  );
};

export default BookMark;
