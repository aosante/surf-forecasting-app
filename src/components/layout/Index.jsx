import React from 'react';
import Navbar from './Navbar';
import Forecast from '../Forecast/Forecast';
import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
`;

const Index = () => {
  return (
    <Content>
      <Navbar />
      <Forecast />
    </Content>
  );
};

export default Index;
