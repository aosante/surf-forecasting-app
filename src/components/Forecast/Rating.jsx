import React from 'react';
import styled from 'styled-components';

const RatingCard = styled.div``;

const Rating = () => {
  return (
    <RatingCard className="card">
      <div class="card-body">
        <h5 class="card-title">Spot rating</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-dark">
          Go somewhere
        </a>
      </div>
    </RatingCard>
  );
};

export default Rating;
