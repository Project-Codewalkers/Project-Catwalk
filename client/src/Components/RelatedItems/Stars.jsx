/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StarsBody = styled.div`
  margin: 6px 0px 5px;
  font-size: 18px;
  width: 83px;
`;

const Background = styled.div`
  color: rgb(210, 210, 210);
`;

const Front = styled.div`
  color: rgb(244, 186, 49);
  overflow: hidden;
  margin-top: -22px;
`;

const avgStars = (ratings) => {
  let ratingCount = 0;
  let totalStars = 0;
  Object.keys(ratings).forEach((starValue) => {
    ratingCount += Number(ratings[starValue]);
    totalStars += Number(starValue) * Number(ratings[starValue]);
  });
  if (ratingCount === 0 || totalStars === 0) { return 0; }
  return totalStars / ratingCount;
};

const Stars = ({ stars }) => {
  let rating = 0;
  if (typeof stars === 'object') {
    rating = avgStars(stars);
  } else {
    rating = stars;
  }

  return (
    <StarsBody>
      <div id="stars-container">
        <Background>
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </Background>
        <Front style={{ width: `${rating * 20}%` }}>
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </Front>
      </div>
    </StarsBody>
  );
};

// Stars.propTypes = {
//   stars: PropTypes.number.isRequired,
// };

export { Stars as default, avgStars };
