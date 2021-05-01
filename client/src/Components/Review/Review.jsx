import React, { useEffect } from 'react';
import styled from 'styled-components';
import Stars, { avgStars } from '../RelatedItems/Stars';
import api from '../../lib/api';

const StyledReview = styled.span`
display: flex;
border: 2px outset black;
flex-direction: column;
justify-content: flex-end;
flex-flow: column wrap;
padding: 5px;
`;

const Review = ({
  summary, body, date, name, helpful, rating, rec, pics, res, id,
}) => {
  const helpfulRev = (reviewId) => (
    api.markReviewAsHelpful(reviewId)
  );

  const reportRev = (reviewId) => (
    api.reportReview(reviewId)
  );

  const format = new Date(date);

  return (
    <StyledReview>

      <span>
        Rating:
        <Stars stars={rating} />
      </span>
      <span>
        {' '}
        {`${name} , ${format}`}
      </span>
      <h3>
        summary:
        {summary}
      </h3>
      <em>
        Recommended:
        {`${rec}`}
      </em>
      <p>
        {' '}
        Body:
        {' '}
        {body}
      </p>
      {res !== null ? (
        <p>
          {' '}
          Response:
          {' '}
          {res}
        </p>
      ) : ''}
      {pics.map((photos) => (<img id="reviewPic" src={`${photos.url}`} alt="" key={photos.id} height="100" width="100" />))}
      <footer>
        {' '}
        <button type="button" onClick={() => helpfulRev(id)}>Helpful</button>
        {' '}
        {`(${helpful})`}
        {' '}
        {' '}
        <button type="button" onClick={() => reportRev(id)}>Report</button>
      </footer>

    </StyledReview>
  );
};

export default Review;
