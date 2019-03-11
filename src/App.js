import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Forecast from './components/Forecast/Forecast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
  font-family: 'Raleway', sans-serif;
`;
// test

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="wrapper">
            <Sidebar />
            <Content>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Forecast} />
              </Switch>
            </Content>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
