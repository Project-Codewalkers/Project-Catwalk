import React from 'react';

const Review = ({
  summary, body, date, name, helpful, rating, rec,
}) => (
  <div>
    <div>
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

    </div>
  </div>
);

export default Review;
