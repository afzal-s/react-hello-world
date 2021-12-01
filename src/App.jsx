import React, { useState } from 'react';

import './App.css';
import logo from './assets/logo.png';

const App = () => {
  const [title, setTitle] = useState("Hello World, From Bridgelabz");

  const openBridgelabz = () => {
    window.open("https://www.bridgelabz.com/");
  }

  return (
    <div className="App">
      <h1 className="title">{title}</h1>
      <img className="logo" src={logo} alt="Bridgelabz Logo" onClick={openBridgelabz} target="_blank" />
    </div>
  );
}

export default App;