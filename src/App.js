import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Consomation from './components/Consomation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Consomation />
      </div>
    );
  }
}

export default App
