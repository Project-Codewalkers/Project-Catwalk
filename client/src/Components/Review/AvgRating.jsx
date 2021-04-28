import React from 'react';
import Stars from '../RelatedItems/Stars';

const AvgRating = ({
  rating, rec, fit, length, quality, comfort,
}) => (
  <div>
    <p>
      Overall Rating
      {' '}
    </p>
    <h2>{rating ? rating.toFixed(1) : rating}</h2>
    <Stars stars={rating} />
    <p>
      characteristics:
      {fit}
      {' '}
      {length}
      {' '}
      {quality}
      {' '}
      {comfort}
    </p>
    <p>
      Recommended:
      {` ${rec}`}
    </p>

  </div>
);
export default AvgRating;
