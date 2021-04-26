import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import api from '../../../lib/api';
import Stars, { avgStars, totalReviews } from '../../RelatedItems/Stars';

const StyledReadReviews = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ReadReviews = ({ productId }) => {
  const [rating, setRating] = useState(null);
  const [reviewCount, setReviewCount] = useState(null);

  useEffect(() => {
    if (!productId) { return setRating(0); }
    return api.getReviewMetadata(productId)
      .then(({ ratings }) => {
        setRating(avgStars(ratings));
        setReviewCount(totalReviews(ratings));
      })
      .catch(() => {
        setRating(0);
      });
  }, [productId]);

  if (reviewCount === null || reviewCount === 0) {
    return <div />;
  }

  return (
    <StyledReadReviews>
      <div style={{ display: 'flex', alignContent: 'center' }}>
        <span>
          <Stars stars={rating} />
        </span>
        <span style={{ display: 'flex', alignContent: 'center', height: 'min-content' }}>
          <a href="#reviews">
            {`Read all ${reviewCount} reviews`}
          </a>
        </span>
      </div>
    </StyledReadReviews>
  );
};

ReadReviews.propTypes = {
  productId: PropTypes.number,
};

ReadReviews.defaultProps = {
  productId: null,
};

export default ReadReviews;
