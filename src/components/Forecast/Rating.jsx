import React, { Component } from 'react';
import styled from 'styled-components';

const RatingCard = styled.div`
  li {
    list-style-type: none;
  }
  .stars {
    display: flex;
    justify-content: space-around;
    width: 50%;
  }
`;

class Rating extends Component {
  state = {
    ratings: []
  };

  componentDidMount() {
    const { solidRating, fadedRating } = this.props;
    let updRatings = [];
    for (let i = 0; i < solidRating; i++) {
      updRatings.push('http://cdnimages.magicseaweed.com/star_filled.png');
    }
    for (let i = 0; i < fadedRating; i++) {
      updRatings.push('http://cdnimages.magicseaweed.com/star_empty.png');
    }
    this.setState({ ratings: updRatings });
  }
  render() {
    const { ratings } = this.state;
    return (
      <RatingCard className="card mb-3">
        <div className="card-body">
          <h3 className="card-title">Swell Rating</h3>
          <div className="stars">
            {ratings.map((rating, i) => (
              <img src={rating} key={i} />
            ))}
          </div>
        </div>
        <div className="card-footer text-muted">
          <ul className="list-group">
            <li>
              <strong>Solid stars: </strong>swell quality/power
            </li>
            <li>
              <strong>Faded stars: </strong>rating affected by wind
            </li>
          </ul>
        </div>
      </RatingCard>
    );
  }
}

export default Rating;
