import React from 'react';
import styled from 'styled-components';

const SurfCard = styled.div`
  li {
    list-style-type: none;
  }
  @media (max-width: 1010px) {
    margin-top: 1em;
  }
  h2.range {
    color: #2fbc1a;
  }
`;

const SurfHeight = ({ maxHeight, minHeight, direction, period }) => {
  return (
    <SurfCard className="card h-100">
      <div className="card-body">
        <h3 className="card-title">Height & Direction</h3>
        <h2 className="range">
          {minHeight} - {maxHeight} ft
        </h2>
      </div>
      <div className="card-footer text-muted">
        <ul className="list-group">
          <li>
            <strong>Direction: </strong>
            {direction}
          </li>
          <li>
            <strong>Period: </strong>
            {period}s
          </li>
        </ul>
      </div>
    </SurfCard>
  );
};

export default SurfHeight;
