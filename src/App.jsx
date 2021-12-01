import React, { useState } from "react";

import "./App.css";
import logo from "./assets/logo.png";

const App = () => {
  const [title, setTitle] = useState("World");
  const [error, setError] = useState("");

  const openBridgelabz = () => {
    window.open("https://www.bridgelabz.com/");
  };

  const nameChange = (event) => {
    const nameRegex = new RegExp("^[A-Z]{1}[A-Za-z\\s]{2,}$");

    if (nameRegex.test(event.target.value)) {
      setTitle(event.target.value);
    }

    if (nameRegex.test(event.target.value)) {
      setError("");
    } else {
      setError("Invalid Name");
    }
  };

  return (
    <div className="App">
      <h1 className="title">Hello {title}, From Bridgelabz</h1>
      <img
        className="logo"
        src={logo}
        alt="Bridgelabz Logo"
        onClick={openBridgelabz}
        target="_blank"
      />
      <div className="inputBox">
        <input
          className="input"
          placeholder="Enter Your Name"
          type="text"
          onChange={nameChange}
        />
      </div>
      <p className="error">{error}</p>
      <p>At BridgeLabz, We're a community of</p>
      <ul className="list">
        <li>Technologists</li>
        <li>Thinker</li>
        <li>Builders</li>
      </ul>
      <p>
        Working together to keep the Tech Employability of Engineers alive and
        accessible, so Texh Companies worldwide can get contributors and
        creators for Technology Solutions. We believe this act of human
        collaboration across an employability platform is essential to
        individual growth and our collective future.
      </p>
      <p className="line-space">
        To know about us, visit <a href="https://www.bridgelabz.com/" target="_blank">BridgeLabz</a> to learn more about our mission
         i.e. <strong>Employability to all.</strong>
      </p>
    </div>
  );
};

export default App;
