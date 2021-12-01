import React, { useState } from 'react';

import './App.css';
import logo from './assets/logo.png';

const App = () => {
  const [title, setTitle] = useState("World");

  const openBridgelabz = () => {
    window.open("https://www.bridgelabz.com/");
  }

  const nameChange = (event) => {
    setTitle(event.target.value);
  }

  return (
    <div className="App">
      <h1 className="title">Hello {title}, From Bridgelabz</h1>
      <img className="logo" src={logo} alt="Bridgelabz Logo" onClick={openBridgelabz} target="_blank" />
      <div className="inputBox">
        <input className="input" placeholder="Enter Your Name" type="text" onChange={nameChange} />
      </div>
    </div>
  );
}

export default App;