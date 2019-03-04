import React, { Component } from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import SurfHeight from './SurfHeight';

const Content = styled.div`
  height: 100vh;
  margin: 0;
`;

class Forecast extends Component {
  // state will be initialized in this component
  // here is where all the forecast components will go
  render() {
    return (
      <Content className="container">
        <div class="row">
          <div class="col-md-4 col-sm-12">
            {/* Ratings Component */}
            <Rating />
            {/* ------------------- */}
          </div>
          <div class="col-md-4 col-sm-12">
            {/* Surf height and direction component */}
            <SurfHeight />
            {/* ------------------- */}
          </div>
        </div>
      </Content>
    );
  }
}

export default Forecast;
