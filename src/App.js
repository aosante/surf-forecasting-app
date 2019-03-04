import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/layout/Sidebar';
import Index from './components/layout/Index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Sidebar />
          <Index />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
