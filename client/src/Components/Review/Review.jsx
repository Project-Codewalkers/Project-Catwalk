import React, { useEffect } from 'react';
import styled from 'styled-components';
import Stars, { avgStars } from '../RelatedItems/Stars';

const StyledReview = styled.div`
border: 12px;
border-color: black;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Review = ({
  summary, body, date, name, helpful, rating, rec, pics, res, id,
}) => {
  const helpfulRev = (reviewId) => (
    console.log(reviewId)
    // api.markReviewAsHelpful(reviewId)
    //   .then(() => (
    //     console.log('Thank you for your input')
    //   ))

  );

  const reportRev = (reviewId) => (
    console.log(reviewId)
    // api.reportReview(reviewId)
    //   .then(() => (
    //     console.log('This review has been reported')
    //   ))

  );
  const format = new Date(date);

  return (
    <StyledReview>

      <span>
        Rating:
        <Stars stars={rating} />
      </span>
      <span>
        Name and date
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
        helpful:
        {' '}
        <button onClick={() => helpfulRev(id)}>helpful</button>
        {' '}
        {helpful}
        {' '}
        {' '}
        <button onClick={() => reportRev(id)}>Report</button>
      </footer>

    </StyledReview>
  );
};

export default Review;
