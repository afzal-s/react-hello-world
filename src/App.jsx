import React, { useState } from 'react';

import './App.css';
import logo from './assets/logo.png';

const App = () => {
  const [title, setTitle] = useState("World");
  const [error, setError] = useState("");

  const openBridgelabz = () => {
    window.open("https://www.bridgelabz.com/");
  }

  const nameChange = (event) => {
    const nameRegex = new RegExp('^[A-Z]{1}[A-Za-z\\s]{2,}$');  
    
    if(nameRegex.test(event.target.value)){
      setTitle(event.target.value);
    }  

    if (nameRegex.test(event.target.value)) {
      setError("");
    } else {
      setError("Invalid Name");
    }
  }

  return (
    <div className="App">
      <h1 className="title">Hello {title}, From Bridgelabz</h1>
      <img className="logo" src={logo} alt="Bridgelabz Logo" onClick={openBridgelabz} target="_blank" />
      <div className="inputBox">
        <input className="input" placeholder="Enter Your Name" type="text" onChange={nameChange} />
      </div>
      <p className="error">{error}</p>
    </div>
  );
}

export default App;