import React, { Component } from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import SurfHeight from './SurfHeight';
import Weather from './Weather';
import PeriodChart from './PeriodChart';
import SwellChart from './SwellChart';
import axios from 'axios';

const Content = styled.div`
  height: auto;
  margin: 0;
  .card {
    box-shadow: 0 0 5px 0 #000;
  }
  .charts {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  @media (max-width: 1010px) {
    .charts {
      flex-direction: column;
    }
    .charts > * {
      width: 100%;
    }
  }

  label {
    font-size: 1.5em;
    color: #2fbc1a;
  }
`;

class Forecast extends Component {
  constructor(props) {
    super(props);
  }
  // state will be initialized in this component
  state = {
    value: 'Witches Rock',
    periodChart: '',
    swellChart: '',
    //weather data
    weather: '',
    temperature: 0,
    pressure: 0,
    localTimestamp: 0,
    //ratings data
    solidRating: 0,
    fadedRating: 0,
    //swell data
    absMaxBreakingHeight: 0,
    absMinBreakingHeight: 0,
    compassDirection: '',
    period: 0,
    //wind data
    direction: 0,
    speed: 0,
    //stars ratings
    ratings: []
  };
  componentDidMount() {
    let forecastNumber = 4;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://magicseaweed.com/api/${
          process.env.REACT_APP_MS_KEY
        }/forecast/?spot_id=443&units=us&fields=charts.*,condition.weather,condition.temperature,condition.pressure,localTimestamp,solidRating,fadedRating,swell.absMaxBreakingHeight,swell.absMinBreakingHeight,swell.components.primary.compassDirection,swell.components.primary.period,wind.direction,wind.speed`
      )
      .then(res => {
        console.log(res.data[forecastNumber]);
        this.setState({
          periodChart: res.data[forecastNumber].charts.period,
          swellChart: res.data[forecastNumber].charts.swell,
          weather: res.data[forecastNumber].condition.weather,
          temperature: res.data[forecastNumber].condition.temperature,
          pressure: res.data[forecastNumber].condition.pressure,
          localTimestamp: res.data[forecastNumber].localTimestamp,
          solidRating: res.data[forecastNumber].solidRating,
          fadedRating: res.data[forecastNumber].fadedRating,
          absMaxBreakingHeight: Math.round(
            res.data[forecastNumber].swell.absMaxBreakingHeight
          ),
          absMinBreakingHeight: Math.round(
            res.data[forecastNumber].swell.absMinBreakingHeight
          ),
          compassDirection:
            res.data[forecastNumber].swell.components.primary.compassDirection,
          period: res.data[forecastNumber].swell.components.primary.period,
          direction: res.data[forecastNumber].wind.direction,
          speed: res.data[forecastNumber].wind.speed
        });
      })
      .then(_ => {
        let updRatings = [];
        for (let i = 0; i < this.state.solidRating; i++) {
          updRatings.push('http://cdnimages.magicseaweed.com/star_filled.png');
        }
        for (let i = 0; i < this.state.fadedRating; i++) {
          updRatings.push('http://cdnimages.magicseaweed.com/star_empty.png');
        }
        this.setState({ ratings: updRatings });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Content className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <SurfHeight
              maxHeight={this.state.absMaxBreakingHeight}
              minHeight={this.state.absMinBreakingHeight}
              direction={this.state.compassDirection}
              period={this.state.period}
            />
          </div>
          <div className="col-lg-4 col-sm-12">
            <Weather
              weather={this.state.weather}
              temp={this.state.temperature}
              pressure={this.state.pressure}
            />
          </div>
          <div className="col-lg-4 col-sm-12">
            <Rating ratings={this.state.ratings} />
          </div>
        </div>
        <div className=".container mt-5 charts">
          <PeriodChart periodChart={this.state.periodChart} />
          <SwellChart swellChart={this.state.swellChart} />
        </div>
        {/* insert row here */}
        <div className="form-group col-sm-12 col-md-4 mt-3">
          <label htmlFor="exampleFormControlSelect1">Select your spot</label>
          <select
            className="form-control container"
            id="exampleFormControlSelect1"
            onChange={this.props.change}
            value={this.props.value}
          >
            <option value="Witches Rock">Witches Rock (North Pacific)</option>
            <option value="Playa Hermosa">
              Playa Hermosa (Central Pacific)
            </option>
          </select>
        </div>
      </Content>
    );
  }
}

export default Forecast;
