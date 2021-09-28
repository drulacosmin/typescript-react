import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/CustomButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Demo
        </a>
        <>
      <h1>Colorful Custom Button Components</h1>
      <Button 
        border="none"
        color="pink"
        height = "200px"
        onClick={() => alert("You clicked on the pink circle!")}
        radius = "50%"
        width = "200px"
        children = "I'm a pink circle!"
      />
    </>
      </header>
    </div>
  );
}

export default App;
