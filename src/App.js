import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/layout/Sidebar';
import Index from './components/layout/Index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="wrapper">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Index} />
              {/* //the other route is the page to select the favorite spots */}
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
