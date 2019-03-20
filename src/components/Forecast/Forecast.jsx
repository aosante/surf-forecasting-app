import React, { Component } from 'react';
import styled from 'styled-components';
import Rating from './Rating';
import SurfHeight from './SurfHeight';
import Weather from './Weather';
import Wind from './Wind';
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
    justify-content: space-between;
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
    this.state = {
      //forecastNumber will change when clicking buttons
      forecastNumber: 4,
      value: 'Witches Rock',
      //charts
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
  }

  fetchData(spotId) {
    let forecastNumber = 4;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://magicseaweed.com/api/${
          process.env.REACT_APP_MS_KEY
        }/forecast/?spot_id=${spotId}&units=us&fields=charts.*,condition.weather,condition.temperature,condition.pressure,localTimestamp,solidRating,fadedRating,swell.absMaxBreakingHeight,swell.absMinBreakingHeight,swell.components.primary.compassDirection,swell.components.primary.period,wind.direction,wind.speed`
      )
      .then(res => {
        console.log(res.data);
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

  componentDidMount() {
    this.fetchData(this.props.spotId);
  }

  //change spot
  componentDidUpdate(prevProps) {
    if (this.props.spotId !== prevProps.spotId) {
      this.fetchData(this.props.spotId);
    }
  }

  render() {
    const {
      absMaxBreakingHeight,
      absMinBreakingHeight,
      compassDirection,
      period,
      weather,
      temperature,
      pressure,
      ratings,
      periodChart,
      swellChart,
      direction,
      speed
    } = this.state;
    return (
      <Content className="container">
        <div className="row mb-3">
          <div className="form-group col-lg-4 col-sm-12 mt-3">
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
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <SurfHeight
              maxHeight={absMaxBreakingHeight}
              minHeight={absMinBreakingHeight}
              direction={compassDirection}
              period={period}
            />
          </div>
          <div className="col-lg-4 col-sm-12">
            <Weather weather={weather} temp={temperature} pressure={pressure} />
          </div>
          <div className="col-lg-4 col-sm-12">
            <Rating ratings={ratings} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12 col-lg-4">
            <Wind direction={direction} speed={speed} />
          </div>
        </div>
        <div className="container mt-3 charts">
          <PeriodChart periodChart={periodChart} />
          <SwellChart swellChart={swellChart} />
        </div>
      </Content>
    );
  }
}

export default Forecast;
