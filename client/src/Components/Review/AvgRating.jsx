import React from 'react';
import Stars, { avgStars } from '../RelatedItems/Stars';

const AvgRating = ({
  rating, rec, fit, length, quality, comfort,
}) =>

  (
    <div>
      <p>
        rating:
        {' '}
        {rating ? avgStars(rating) : rating}
      </p>
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
