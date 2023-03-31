import React from 'react';
import './NavBar.css'
const NavBar = () => {
    const imgUrl ="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    return (
        <nav className='nav'>
          <h2>Knowledge Hunter</h2>  
          <img src={imgUrl} alt="" />
        </nav>
    );
};

export default NavBar;