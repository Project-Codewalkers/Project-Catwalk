import React from 'react';
import styled from 'styled-components';

const StyledReview = styled.div`
border: 12px;
border-color: black;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Review = ({
  summary, body, date, name, helpful, rating, rec,
}) => (
  <StyledReview>

    <span>
      Rating
      {rating}
    </span>
    <span>
      Name and date
      {' '}
      {`${name} , ${date}`}
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
    <footer>
      {' '}
      helpful:
      {helpful}
    </footer>

  </StyledReview>
);

export default Review;
