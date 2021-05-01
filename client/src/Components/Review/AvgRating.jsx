import React from 'react';
import styled from 'styled-components';
import Stars from '../RelatedItems/Stars';

const StyledAvg = styled.span`
display: flex;
border: 2px outset gray;
padding: 10px;
`;

const AvgRating = ({
  rating, rec, fit, length, quality, comfort,
}) => (
  <StyledAvg>
    <div>
      <p>
        Overall Rating
        {' '}
      </p>
      <h2>{rating ? rating.toFixed(1) : rating}</h2>
      <Stars stars={rating} />
      <p>
        characteristics:
        {' '}
        {`Fit: ${fit ? Number(fit.value).toFixed(1) : fit}`}
        {' '}
        {length}
        {' '}
        {quality}
        {' '}
        {comfort && `Comfort: ${comfort ? Number(comfort.value).toFixed(1) : comfort}`}
      </p>
      <p>
        Recommended:
        {` ${rec}`}
      </p>

    </div>
  </StyledAvg>
);
export default AvgRating;
