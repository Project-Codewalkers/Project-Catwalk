import React from 'react';

const AvgRating = ({ rating, character, rec }) =>
// const { Fit: id, value } = character;

  (
    <div>
      <p>
        rating
        {/* {rating} */}
      </p>
      <p>
        characteristics
        {character.characteristics ? `${character.characteristics}` : `${character}`}
      </p>
      <p>
        Recommended:
        {` ${rec}`}
      </p>

    </div>
  );
export default AvgRating;
