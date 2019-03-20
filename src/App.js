import React, { Component } from 'react';
import './App.css';

//import components
import MainLayout from './components/MainLayout';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <MainLayout />
      </div>
    );
  }
}

export default App;
