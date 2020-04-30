import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Edgar's React Calculator</h1>
      <div>
        <p>This is Edgar's simple and accessible calculator.</p>
      </div>
    </div>
  );
}

export default App;
