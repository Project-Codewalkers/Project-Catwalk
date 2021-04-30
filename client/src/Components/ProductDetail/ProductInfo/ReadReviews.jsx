import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stars from '../../RelatedItems/Stars';

const StyledReadReviews = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ReadReviews = ({ reviewCount, avgRating }) => {
  if (reviewCount === null || reviewCount === 0) {
    return <div />;
  }

  return (
    <StyledReadReviews>
      <div style={{ margin: '5px 10px 5px 0', width: '83px' }}>
        <Stars stars={avgRating} />
      </div>
      <div style={{ margin: '5px' }}>
        <a href="#reviews">
          {`Read all ${reviewCount} reviews`}
        </a>
      </div>
    </StyledReadReviews>
  );
};

ReadReviews.propTypes = {
  avgRating: PropTypes.number,
  reviewCount: PropTypes.number,
};

ReadReviews.defaultProps = {
  avgRating: 0,
  reviewCount: 0,
};

export default ReadReviews;
