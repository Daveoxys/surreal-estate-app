import { Router } from "express";
import React from "react";
import "../styles/App.css";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
    </div>
  );
};

export default App;
