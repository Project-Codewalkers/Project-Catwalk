import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Review from './Review';
import AvgRating from './AvgRating';
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
        console.log('list Reviews', product);
        setReview(product);
      })
      .catch((err) => console.log(err));
    api.getReviewMetadata(id)
      .then((meta) => {
        console.log('this is meta', meta);
        setMeta(meta);
      })
      .catch((err) => console.log(err));
  }, [id, sort, page, count]);
  return (
    <div>
      <p> Reviews go here: </p>
      {reviews.map((item) => (
        <Review
          rec={item.recommend}
          key={item.review_id}
          summary={item.summary}
          body={item.body}
          date={item.date}
          name={item.reviewer_name}
          helpful={item.helpfulness}
          rating={item.rating}
        />
      ))}
      <AvgRating
        key={metaReview.product_id}
        //  rating={metaReview.ratings}// object
        character={metaReview}// object
        rec={metaReview.recommended === undefined ? 'empty' : metaReview.recommended.true > metaReview.recommended.false}
      />
    </div>
  );
};
ReviewList.propTypes = {
  id: PropTypes.number.isRequired,
};
export default ReviewList;
