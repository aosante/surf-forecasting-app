import React from 'react';
import styled from 'styled-components';
import '../../icons.css';

const WeatherCard = styled.div`
  li {
    list-style-type: none;
  }
  @media (max-width: 1010px) {
    margin-top: 2em;
  }
`;

const Weather = ({ weather, temp, pressure }) => {
  return (
    <WeatherCard className="card h-100">
      <div className="card-body">
        <h3 className="card-title">Weather</h3>
        <div className={`msw-sw msw-sw-${weather}`} />
      </div>
      <div className="card-footer text-muted">
        <ul className="list-group">
          <li>
            <strong>Temperature: </strong>
            {temp}&#8451;
          </li>
          <li>
            <strong>Pressure: </strong>
            {pressure} mb
          </li>
        </ul>
      </div>
    </WeatherCard>
  );
};

export default Weather;
