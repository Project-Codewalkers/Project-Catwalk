import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Stars from '../RelatedItems/Stars';

const StyledAvg = styled.span`
display: flex;
border: 2px outset ;
padding: 10px;
margin: 10px;
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

// AvgRating.propTypes = {
//   rating: PropTypes.number,
//   rec: PropTypes.string,
//   fit: PropTypes.string,
//   length: PropTypes.string,
//   quality: PropTypes.string,
//   comfort: PropTypes.string,
// };

// AvgRating.defaultProps = {
//   rating: 0,
//   rec: '',
//   fit: '',
//   length: '',
//   quality: '',
//   comfort: '',
// };
export default AvgRating;
