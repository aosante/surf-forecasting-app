import React from 'react';
import styled from 'styled-components';

const Chart = styled.div`
  width: 45%;
  padding: 0.25em;
  border-radius: 5px;
  h3 {
    padding: 0.5em;
  }
  img {
    width: 100%;
    height: auto;
    box-shadow: 0 0 5px 0 #000;
  }
  .legend {
    padding: 1em;
  }
`;

const SwellChart = ({ swellChart }) => {
  return (
    <Chart>
      <h3>Swell Height</h3>
      <img src={swellChart} alt="Swell Chart" />
      <div className="legend">color key here</div>
    </Chart>
  );
};

export default SwellChart;
