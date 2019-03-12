import React from 'react';
import styled from 'styled-components';
import secs from '../../img/secs.png';

const Chart = styled.div`
  width: 45%;
  padding: 0.25em;
  h3 {
    padding: 0.5em;
  }
  img {
    width: 100%;
    height: auto;
    box-shadow: 0 0 5px 0 #000;
  }
  .legend {
    margin-top: 1em;
    box-shadow: unset;
  }
`;

const PeriodChart = ({ periodChart }) => {
  return (
    <Chart>
      <h3>Swell Period</h3>
      <img src={periodChart} alt="Period Chart" />{' '}
      <img className="legend" src={secs} alt="period legend" />
    </Chart>
  );
};

export default PeriodChart;
