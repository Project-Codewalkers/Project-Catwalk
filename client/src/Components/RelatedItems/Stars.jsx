import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StarsBody = styled.div`
  margin: 5px 0px 5px;
  font-size: 18px;
  height: 25px;
  width: 83px;
  position: relative;
`;

const Background = styled.div`
  color: rgba(244,186,49,0.2);
  position: absolute;
  top: 0;
  left: 0;
`;

const Front = styled.div`
  color: rgb(244, 186, 49);
  overflow: hidden;
  /* margin-top: -22px; */
  position: absolute;
  top: 0;
  left: 0;
`;

const avgStars = (ratings) => {
  let ratingCount = 0;
  let totalStars = 0;
  if (!ratings) { return null; }
  Object.keys(ratings).forEach((starValue) => {
    ratingCount += Number(ratings[starValue]);
    totalStars += Number(starValue) * Number(ratings[starValue]);
  });
  if (ratingCount === 0) { return null; }
  return totalStars / ratingCount;
};

const totalReviews = (ratings) => {
  let ratingCount = 0;
  Object.keys(ratings).forEach((starValue) => {
    ratingCount += Number(ratings[starValue]);
  });
  return ratingCount;
};

const Stars = ({ stars }) => {
  let rating = 0;
  if (!stars) { return <div />; }
  if (typeof stars === 'object') {
    rating = avgStars(stars);
  } else {
    rating = stars;
  }

  return (
    <div id="stars-container" style={{ position: 'relative' }}>
      <StarsBody>
        <Background>
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </Background>
        <Front style={{ width: `${rating * 20}%` }}>
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </Front>
      </StarsBody>
    </div>
  );
};

Stars.propTypes = {
  stars: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.shape({
      ratings: PropTypes.shape({
        1: PropTypes.string,
        2: PropTypes.string,
        3: PropTypes.string,
        4: PropTypes.string,
        5: PropTypes.string,
      }),
    }),
  ]),
};

Stars.defaultProps = {
  stars: null,
};

export { Stars as default, avgStars, totalReviews };
