import React, { Component } from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import SurfHeight from './SurfHeight';
import axios from 'axios';

const Content = styled.div`
  height: 100vh;
  margin: 0;
`;

class Forecast extends Component {
  // state will be initialized in this component
  state = {
    charts: {
      period: '',
      swell: ''
    },
    weather: '',
    localTimestamp: 0,
    solidRating: 3,
    fadedRating: 1,
    swell: {
      absMaxBreakingHeight: 0,
      absMinBreakingHeight: 0,
      unit: 'ft'
    },
    wind: {
      direction: 0,
      speed: 0,
      unit: 'mph'
    }
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://magicseaweed.com/api/${
          process.env.REACT_APP_MS_KEY
        }/forecast/?spot_id=443&units=us&fields=charts.*,condition.weather,localTimestamp,solidRating,fadedRating,swell.absMaxBreakingHeight,swell.absMinBreakingHeight,wind.direction,wind.speed`
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Content className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            {/* Ratings Component */}
            <Rating
              solidRating={this.state.solidRating}
              fadedRating={this.state.fadedRating}
            />
            {/* ------------------- */}
          </div>
          <div className="col-md-4 col-sm-12">
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
