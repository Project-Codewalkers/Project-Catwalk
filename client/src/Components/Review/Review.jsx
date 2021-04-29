import React from 'react';
import styled from 'styled-components';
import Stars, { avgStars } from '../RelatedItems/Stars';
import HelpfulReview from './HelpfulReview';
import api from '../../lib/api';

const StyledReview = styled.div`
border: 12px;
border-color: black;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Review = ({
  summary, body, date, name, helpful, rating, rec, pics, res, id
}) => (
  <StyledReview>

    <span>
      Rating:
      <Stars stars={rating} />
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
    {res !== null ? (
      <p>
        {' '}
        Response:
        {' '}
        {res }
      </p>
    ) : ''}
    {pics.map((photos) => (<img id="reviewPic" src={`${photos.url}`} alt="" key={photos.id} height="100" width="100" />))}
    <footer>
      {' '}
      helpful:
      <button onClick={() => api.markReviewAsHelpful(id)}/>
      {helpful}
    </footer>

  </StyledReview>
);

export default Review;
