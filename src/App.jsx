import React, { useState } from 'react';

import './App.css';

const App = () => {
  const [title, setTitle] = useState("Hello World, From Bridgelabz")

  return (
    <h1>{title}</h1>
  );
}

export default App;