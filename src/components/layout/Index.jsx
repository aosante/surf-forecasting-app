import React from 'react';
import Navbar from './Navbar';
import Forecast from '../Forecast/Forecast';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Content = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
`;

const Index = () => {
  return (
    <Router>
      <Content>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Forecast} />
          {/* route to spot selector, rendered when user click on nav */}
        </Switch>
      </Content>
    </Router>
  );
};

export default Index;
