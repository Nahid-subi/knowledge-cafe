import React from 'react';
import Body from './component/Body/Body';
import NavBar from './component/NavBar/NavBar';
import './App.css'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className='hr'></div>
      <Body></Body>
    </div>
  );
};

export default App;