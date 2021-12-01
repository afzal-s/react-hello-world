import React, { useState } from 'react';

import './App.css';
import logo from './assets/logo.png';

const App = () => {
  const [title, setTitle] = useState("Hello World, From Bridgelabz")

  return (
    <div className="App">
      <h1 className="title">{title}</h1>
      <img className="logo" src={logo} alt="Bridgelabz Logo" />
    </div>
  );
}

export default App;