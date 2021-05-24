import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Demo from './Components/homePage'
import './App.css';

class App extends Component {
  render() {
    return (
        <>
          <Navbar />
          <Demo />
        </>
    );
  }
}

export default App;
