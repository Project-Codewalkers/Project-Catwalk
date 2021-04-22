import React, { useState, useEffect } from 'react';
import Review from '/home/elijiah/SEI/projects/Project-Catwalk/client/src/Components/Review/Review.jsx';
import api from '../../lib/api';

const ReviewList = ({ id }) => {
  // Hooks state goes here map over the list and render pass down into the review
  const [reviews, setReview] = useState([]);
  const [metaReview, setMeta] = useState({});

  const sort = 'newest';
  const page = 1;
  const count = 10;
  useEffect(() => {
    api.listReviews(id, sort, page, count)
      .then((product) => {
        setReview(product);
      })
      .catch((err) => console.log(err));
    api.getReviewMetadata(id)
      .then((meta) => {
        console.log(meta);
        setMeta(meta);
      })
      .catch((err) => console.log(err));
  }, [id, sort, page, count]);
  return (
    <div>
      <p> Reviews go here: </p>
      {reviews.map((item) => (
        <Review
          rec={metaReview.recommended === undefined ? 'empty' : metaReview.recommended.true > metaReview.recommended.false}
          key={item.review_id}
          summary={item.summary}
          body={item.body}
          date={item.date}
          name={item.reviewer_name}
          helpful={item.helpfulness}
          rating={item.rating}
        />
      ))}

    </div>
  );
};
export default ReviewList;
