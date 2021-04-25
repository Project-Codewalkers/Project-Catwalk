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
        characteristics:
        {character.characteristics ? ` Fit: ${character.characteristics.Fit.value} , Comfort: ${character.characteristics.Comfort.value}, Length: ${character.characteristics.Length.value}, Quality: ${character.characteristics.Quality.value} ` : `${character}`}
      </p>
      <p>
        Recommended:
        {` ${rec}`}
      </p>

    </div>
  );
export default AvgRating;
